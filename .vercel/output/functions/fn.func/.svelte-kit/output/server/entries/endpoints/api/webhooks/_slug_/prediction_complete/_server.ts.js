import { j as json, e as error } from "../../../../../../chunks/index.js";
import { s as supabaseClientAdmin } from "../../../../../../chunks/db.server.js";
import { h as handleError } from "../../../../../../chunks/db.js";
const POST = async (event) => {
  try {
    const payload = await event.request.json();
    const { logs: _, ...rest } = payload;
    console.log("Payload", rest);
    const userID = event.params.slug;
    if (!userID) {
      throw new Error("ID not valid");
    }
    const [url] = payload.output || [];
    if (url) {
      console.log("Upload image: ", url);
      const image = await fetch(url);
      handleError(
        await supabaseClientAdmin.storage.from("photos-generated").upload(`${userID}/${payload.id}.jpg`, await image.arrayBuffer())
      );
      console.log("Upload completed");
    } else {
      throw new Error("Missing url", {
        cause: payload
      });
    }
    handleError(
      await supabaseClientAdmin.from("predictions").upsert({
        id: payload.id,
        user_id: userID,
        status: payload.status,
        completed_at: new Date().toISOString()
      })
    );
    console.log("Prediction updated");
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
