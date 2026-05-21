import { c as createServerRpc, s as supabaseAdmin } from "./client.server-DeYF7DVZ.mjs";
import { j as createServerFn } from "./server-Dgf1Fqjt.mjs";
import { o as objectType, s as stringType } from "./types-BZpehCtZ.mjs";
import "./index-DdGN5IVl.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const getBookings_createServerFn_handler = createServerRpc({
  id: "d685d2fcea75688912a3d59887bf007ff20d21e8cb9f2ef10ed4fac47f0900f5",
  name: "getBookings",
  filename: "src/lib/admin.functions.ts"
}, (opts) => getBookings.__executeServer(opts));
const getBookings = createServerFn({
  method: "GET"
}).handler(getBookings_createServerFn_handler, async () => {
  const {
    data,
    error
  } = await supabaseAdmin.from("bookings").select("*").order("created_at", {
    ascending: false
  });
  if (error) {
    console.error("[admin] get bookings failed", error);
    throw new Error("Could not load bookings.");
  }
  return data ?? [];
});
const updateBookingStatus_createServerFn_handler = createServerRpc({
  id: "8bb6fc0a07bd5ded83f0f5c34ac77101e31e16438ffe62bc9269f309e95bc551",
  name: "updateBookingStatus",
  filename: "src/lib/admin.functions.ts"
}, (opts) => updateBookingStatus.__executeServer(opts));
const updateBookingStatus = createServerFn({
  method: "POST"
}).inputValidator((input) => objectType({
  id: stringType().uuid(),
  status: stringType().min(1)
}).parse(input)).handler(updateBookingStatus_createServerFn_handler, async ({
  data
}) => {
  const {
    error
  } = await supabaseAdmin.from("bookings").update({
    status: data.status
  }).eq("id", data.id);
  if (error) {
    console.error("[admin] update status failed", error);
    throw new Error("Could not update booking status.");
  }
  return {
    success: true
  };
});
export {
  getBookings_createServerFn_handler,
  updateBookingStatus_createServerFn_handler
};
