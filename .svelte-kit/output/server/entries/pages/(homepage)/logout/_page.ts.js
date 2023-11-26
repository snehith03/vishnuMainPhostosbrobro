import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { r as redirect } from "../../../../chunks/index.js";
const load = async (event) => {
  const { session, supabaseClient } = await getSupabase(event);
  if (session) {
    await supabaseClient.auth.signOut();
    throw redirect(303, "/");
  }
};
export {
  load
};
