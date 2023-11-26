import { j as json, e as error } from "../../../../chunks/index.js";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { s as supabaseClientAdmin } from "../../../../chunks/db.server.js";
import { g as getAdminUserInfo, u as updateAdminUserInfo, a as handleErrorAndGetData } from "../../../../chunks/db.js";
import { c as PUBLIC_ENV } from "../../../../chunks/public.js";
import { a as getTrainingStatus, b as runTrain } from "../../../../chunks/replicate.server.js";
const GET = async (event) => {
  try {
    const { session } = await getSupabase(event);
    if (!session) {
      throw new Error("Session not valid");
    }
    const user = session.user;
    const userInfo = await getAdminUserInfo(session.user.id, supabaseClientAdmin);
    if (!userInfo.paid) {
      throw new Error("Payment required");
    }
    if (!userInfo.trained && userInfo.in_training) {
      const trainResult = await getTrainingStatus(user);
      console.log("Train result", trainResult);
      if (trainResult.status === "succeeded") {
        await updateAdminUserInfo(
          user.id,
          {
            replicate_version_id: trainResult.version,
            replicate_train_status: trainResult.status,
            in_training: false,
            trained: true
          },
          supabaseClientAdmin
        );
      }
    }
    return json({ trained: true });
  } catch (error$1) {
    console.error(error$1);
    if (error$1 instanceof Error) {
      console.error(error$1.cause);
      throw error(500, { message: error$1.message });
    }
    throw error(500);
  }
};
const POST = async (event) => {
  try {
    if (PUBLIC_ENV === "STAGING")
      ;
    const {
      theme,
      prompt,
      quantity,
      instance_class: instanceClass
    } = await event.request.json();
    if (!instanceClass) {
      throw new Error("Subject not selected");
    }
    const { session } = await getSupabase(event);
    if (!session) {
      throw new Error("Session not valid");
    }
    const user = session.user;
    const userInfo = await getAdminUserInfo(session.user.id, supabaseClientAdmin);
    if (!userInfo.paid) {
      throw new Error("Payment required");
    }
    if (userInfo.in_training || userInfo.trained) {
      throw new Error("Can not train multiple times");
    }
    const imagesCount = handleErrorAndGetData(
      await supabaseClientAdmin.storage.from("photos-for-training").list(userInfo.id)
    ).length;
    if (imagesCount < 15) {
      throw new Error(
        "You need to upload at least 15 photos for the AI to learn what you look like"
      );
    }
    const trainResult = await runTrain(instanceClass, user, theme, prompt, quantity);
    console.log("Train result", trainResult);
    await updateAdminUserInfo(
      user.id,
      {
        instance_class: instanceClass,
        in_training: true,
        start_training: new Date().toISOString(),
        replicate_model_id: trainResult.id
      },
      supabaseClientAdmin
    );
    return json({ message: "" });
  } catch (error$1) {
    console.error(error$1);
    if (error$1 instanceof Error) {
      console.error(error$1.cause);
      throw error(500, { message: error$1.message });
    }
    throw error(500);
  }
};
export {
  GET,
  POST
};
