import { createClient } from "@supabase/auth-helpers-sveltekit";
import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_KEY } from "./public.js";
const supabaseClient = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);
function handleError({
  error
}) {
  if (error) {
    throw new Error(error.message, {
      cause: error
    });
  }
}
function handleErrorAndGetData({
  data,
  error
}) {
  if (error) {
    throw new Error(error.message, {
      cause: error
    });
  } else if (data) {
    return data;
  } else {
    throw new Error("Missig db data");
  }
}
const getUserInfo = async () => {
  const { error, data } = await supabaseClient.from("user_info").select("*", { count: "exact" }).single();
  if (!error) {
    return data;
  }
  return {
    id: "",
    paid: false,
    in_training: false,
    trained: false,
    counter: 0,
    created_at: null,
    end_training: null,
    instance_class: null,
    replicate_model_id: null,
    replicate_train_status: null,
    replicate_version_id: null,
    start_training: null
  };
};
const getAdminUserInfo = async (userID, client) => handleErrorAndGetData(
  await client.from("user_info").select("*", { count: "exact" }).eq("id", userID).single()
);
const updateAdminUserInfo = async (userID, body, client) => {
  const { count, error } = await client.from("user_info").update(body).eq("id", userID);
  if (error) {
    throw new Error("Can't update user state", { cause: error });
  }
  if (count == 0) {
    throw new Error("Can't find user info");
  }
};
export {
  handleErrorAndGetData as a,
  getUserInfo as b,
  getAdminUserInfo as g,
  handleError as h,
  supabaseClient as s,
  updateAdminUserInfo as u
};
