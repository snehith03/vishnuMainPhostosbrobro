import { e as error } from "../../../../../../chunks/index.js";
import { s as supabaseClientAdmin } from "../../../../../../chunks/db.server.js";
import JSZip from "jszip";
const GET = async (event) => {
  try {
    const userID = event.params.slug;
    if (!userID) {
      throw new Error("ID not valid");
    }
    const { data: photos, error: error2 } = await supabaseClientAdmin.storage.from("photos-for-training").list(userID);
    if (error2) {
      throw new Error("Can't list photos", { cause: error2 });
    }
    if (photos.length == 0 || photos.length > 100) {
      throw new Error("Wrong photos number");
    }
    const zip = new JSZip();
    for (const image of photos) {
      const { data: photo, error: error22 } = await supabaseClientAdmin.storage.from("photos-for-training").download(userID + "/" + image.name);
      if (error22) {
        throw new Error("Can't download photo", { cause: error22 });
      }
      if (photo) {
        zip.file(image.name, Buffer.from(await photo.arrayBuffer()));
      }
    }
    return new Response(await zip.generateAsync({ type: "uint8array" }), {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="images.zip"'
      }
    });
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
  GET
};
