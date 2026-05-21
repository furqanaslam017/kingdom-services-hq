import { c as createClient } from "./index-DdGN5IVl.mjs";
function createSupabaseClient() {
  const SUPABASE_URL = "https://epbqfwfbdvikvmluldzg.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwYnFmd2ZiZHZpa3ZtbHVsZHpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNzcxMTYsImV4cCI6MjA5NDk1MzExNn0.6NOkHtnfVVrRTvZIyp-esuF4TcimC1C1IWHeNzYJjZE";
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      storage: typeof window !== "undefined" ? localStorage : void 0,
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
let _supabase;
const supabase = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  }
});
export {
  supabase as s
};
