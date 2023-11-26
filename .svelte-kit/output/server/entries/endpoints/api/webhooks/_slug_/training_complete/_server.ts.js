import { j as json, e as error } from "../../../../../../chunks/index.js";
import { u as updateAdminUserInfo, g as getAdminUserInfo } from "../../../../../../chunks/db.js";
import { s as supabaseClientAdmin } from "../../../../../../chunks/db.server.js";
import { _generatePhotos } from "../../../prediction/_server.ts.js";
const POST = async (event) => {
  try {
    const theme = event.url.searchParams.get("theme") || "";
    const prompt = event.url.searchParams.get("prompt") || "";
    const quantity = event.url.searchParams.get("quantity") || "";
    const payload = await event.request.json();
    const { logs: _, ...rest } = payload;
    console.log("Payload", rest);
    const userID = event.params.slug;
    if (!userID) {
      throw new Error("ID not valid");
    }
    await updateAdminUserInfo(
      userID,
      {
        replicate_version_id: payload.version,
        replicate_train_status: payload.status,
        in_training: false,
        trained: true,
        end_training: new Date().toISOString()
      },
      supabaseClientAdmin
    );
    const userInfo = await getAdminUserInfo(userID, supabaseClientAdmin);
    await _generatePhotos(
      {
        theme,
        seed: void 0,
        prompt,
        quantity
      },
      userInfo
    );
    return json({});
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
  POST
};
