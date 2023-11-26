import { P as PUBLIC_SUPABASE_URL } from "./public.js";
import { a as PRIVATE_SUPABASE_SERVICE_ROLE } from "./private.js";
import { createClient } from "@supabase/auth-helpers-sveltekit";
const supabaseClientAdmin = createClient(PUBLIC_SUPABASE_URL, PRIVATE_SUPABASE_SERVICE_ROLE);
export {
  supabaseClientAdmin as s
};
