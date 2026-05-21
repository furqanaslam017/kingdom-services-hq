import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const getBookings = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[admin] get bookings failed", error);
    throw new Error("Could not load bookings.");
  }

  return data ?? [];
});

export const updateBookingStatus = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z.object({
      id: z.string().uuid(),
      status: z.string().min(1),
    }).parse(input)
  )
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("bookings")
      .update({ status: data.status })
      .eq("id", data.id);

    if (error) {
      console.error("[admin] update status failed", error);
      throw new Error("Could not update booking status.");
    }

    return { success: true };
  });
