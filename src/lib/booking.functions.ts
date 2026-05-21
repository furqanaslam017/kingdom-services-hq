import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const BookingSchema = z.object({
  customer_name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
  service_type: z.string().min(2).max(50),
  address: z.string().trim().min(4).max(255),
  preferred_date: z.string().optional().nullable(),
  time_slot: z.string().optional().nullable(),
  notes: z.string().max(1000).optional().or(z.literal("")),
});

export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => BookingSchema.parse(input))
  .handler(async ({ data }) => {
    const { error, data: row } = await supabaseAdmin
      .from("bookings")
      .insert({
        customer_name: data.customer_name,
        phone: data.phone,
        email: data.email || null,
        service_type: data.service_type,
        address: data.address,
        preferred_date: data.preferred_date || null,
        time_slot: data.time_slot || null,
        notes: data.notes || null,
      })
      .select("booking_ref")
      .single();

    if (error) {
      console.error("[booking] insert failed", error);
      throw new Error("We couldn't save your request. Please call us instead.");
    }

    return { booking_ref: row.booking_ref };
  });
