"use server";

import { z } from "zod";

export interface BookingRow {
  id: string;
  customer_name: string;
  phone: string;
  email?: string;
  service_type: string;
  address: string;
  preferred_date?: string;
  time_slot?: string;
  notes?: string;
  status: string;
  booking_ref: string;
  distance_mi?: number;
  price_estimate?: number;
  created_at: string;
  updated_at: string;
}

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

export async function submitBookingAction(input: unknown): Promise<{ booking_ref: string }> {
  const data = BookingSchema.parse(input);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      customer_name: data.customer_name,
      phone: data.phone,
      email: data.email || "",
      service_type: data.service_type,
      address: data.address,
      preferred_date: data.preferred_date || "",
      time_slot: data.time_slot || "",
      notes: data.notes || "",
    }),
  });

  const result = await res.json();

  if (!result.success) {
    console.error("[booking] insert failed", result.error);
    throw new Error("We couldn't save your request. Please call us instead.");
  }

  return { booking_ref: result.data.booking_ref };
}

export async function getBookingsAction(): Promise<BookingRow[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/bookings`, {
    cache: "no-store",
  });

  const result = await res.json();

  if (!result.success) {
    console.error("[admin] get bookings failed", result.error);
    throw new Error("Could not load bookings.");
  }

  return result.data ?? [];
}

export async function updateBookingStatusAction(input: unknown): Promise<{ success: boolean }> {
  const { id, status } = z.object({
    id: z.string().min(1),
    status: z.string().min(1),
  }).parse(input);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/bookings/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });

  const result = await res.json();

  if (!result.success) {
    console.error("[admin] update status failed", result.error);
    throw new Error("Could not update booking status.");
  }

  return { success: true };
}
