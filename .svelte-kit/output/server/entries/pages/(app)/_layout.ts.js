import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { r as redirect } from "../../../chunks/index.js";
const ssr = false;
const load = async (event) => {
  const { session } = await getSupabase(event);
  if (!session) {
    throw redirect(303, "/login");
  }
  return { session };
};
export {
  load,
  ssr
};
