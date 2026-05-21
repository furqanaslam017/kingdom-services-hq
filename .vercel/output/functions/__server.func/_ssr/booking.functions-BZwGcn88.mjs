import { c as createServerRpc, s as supabaseAdmin } from "./client.server-DeYF7DVZ.mjs";
import { j as createServerFn } from "./server-Dgf1Fqjt.mjs";
import { o as objectType, s as stringType, l as literalType } from "./types-BZpehCtZ.mjs";
import "./index-DdGN5IVl.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const BookingSchema = objectType({
  customer_name: stringType().trim().min(2).max(100),
  phone: stringType().trim().min(7).max(30),
  email: stringType().trim().email().max(255).optional().or(literalType("")),
  service_type: stringType().min(2).max(50),
  address: stringType().trim().min(4).max(255),
  preferred_date: stringType().optional().nullable(),
  time_slot: stringType().optional().nullable(),
  notes: stringType().max(1e3).optional().or(literalType(""))
});
const submitBooking_createServerFn_handler = createServerRpc({
  id: "4ced895525f4d44d99fd1ed940c1ff3677d98cc2334551a579fa5fe047b84d7d",
  name: "submitBooking",
  filename: "src/lib/booking.functions.ts"
}, (opts) => submitBooking.__executeServer(opts));
const submitBooking = createServerFn({
  method: "POST"
}).inputValidator((input) => BookingSchema.parse(input)).handler(submitBooking_createServerFn_handler, async ({
  data
}) => {
  const {
    error,
    data: row
  } = await supabaseAdmin.from("bookings").insert({
    customer_name: data.customer_name,
    phone: data.phone,
    email: data.email || null,
    service_type: data.service_type,
    address: data.address,
    preferred_date: data.preferred_date || null,
    time_slot: data.time_slot || null,
    notes: data.notes || null
  }).select("booking_ref").single();
  if (error) {
    console.error("[booking] insert failed", error);
    throw new Error("We couldn't save your request. Please call us instead.");
  }
  return {
    booking_ref: row.booking_ref
  };
});
export {
  submitBooking_createServerFn_handler
};
