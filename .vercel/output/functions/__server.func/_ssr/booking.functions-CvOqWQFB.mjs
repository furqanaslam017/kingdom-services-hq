import { c as createSsrRpc } from "./createSsrRpc-CLR5Oyub.mjs";
import { j as createServerFn } from "./server-Dgf1Fqjt.mjs";
import { o as objectType, s as stringType, l as literalType } from "./types-BZpehCtZ.mjs";
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
const submitBooking = createServerFn({
  method: "POST"
}).inputValidator((input) => BookingSchema.parse(input)).handler(createSsrRpc("4ced895525f4d44d99fd1ed940c1ff3677d98cc2334551a579fa5fe047b84d7d"));
export {
  submitBooking as s
};
