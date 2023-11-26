import { j as json, e as error } from "../../../../chunks/index.js";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { s as supabaseClientAdmin } from "../../../../chunks/db.server.js";
import { g as getAdminUserInfo, h as handleError } from "../../../../chunks/db.js";
import { P as PRIVATE_REPLICATE_INSTANCE_TOKEN } from "../../../../chunks/private.js";
import { g as getPredictionStatus, r as runPrediction } from "../../../../chunks/replicate.server.js";
import { g as getPrompt } from "../../../../chunks/themes.js";
import Replicate from "replicate";
function getNegativePrompt() {
  return "(disfigured), (bad art), (deformed), (poorly drawn), (extra limbs), strange colours, blurry, boring, sketch, lacklustre, repetitive, cropped , closeup , looking side , teeth , weird face , weird eyes .";
}
function getSubjectName() {
  return PRIVATE_REPLICATE_INSTANCE_TOKEN;
}
const getRefinedInstanceClass = (instanceClass) => {
  return instanceClass === "man" ? "male" : instanceClass === "youngmale" ? "youngmale" : instanceClass === "youngfemale" ? "youngfemale" : instanceClass === "woman" ? "female" : instanceClass;
};
function getReplacedPrompt(prompt, instanceClass) {
  return prompt.replaceAll("@me", `${getSubjectName()} ${getRefinedInstanceClass(instanceClass)}`);
}
const GET = async (event) => {
  try {
    const predictionID = event.url.searchParams.get("id");
    const { session } = await getSupabase(event);
    if (!predictionID) {
      throw new Error("Prediction ID not valid");
    }
    if (!session) {
      throw new Error("Session not valid");
    }
    const userInfo = await getAdminUserInfo(session.user.id, supabaseClientAdmin);
    if (!userInfo.paid) {
      throw new Error("Payment required");
    }
    if (userInfo.in_training || !userInfo.trained || !userInfo.replicate_version_id) {
      throw new Error("Model not trained");
    }
    if (userInfo.counter >= 50) {
      throw new Error("You cannot generate more than 50 photos");
    }
    const predictionResponse = await getPredictionStatus(predictionID);
    console.log("Predict response", predictionResponse);
    const { error: error2 } = await supabaseClientAdmin.from("predictions").upsert({
      id: predictionResponse.id,
      user_id: session.user.id,
      status: predictionResponse.status
    });
    if (error2) {
      throw new Error("Error on insert prediction", { cause: error2 });
    }
    const [url] = predictionResponse.output || [];
    if (url) {
      const REPLICATE_API_TOKEN = "r8_E3q5NczWE666LSoVA5Pf8HgfBuiijWU4Nlyf2";
      const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN || REPLICATE_API_TOKEN
      });
      const output = await replicate.run(
        "tencentarc/gfpgan:9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3",
        {
          input: {
            img: url
          }
        }
      );
      const image = await fetch(url);
      await handleError(
        await supabaseClientAdmin.storage.from("photos-generated").upload(`${session.user.id}/${predictionResponse.id}.jpg`, await image.arrayBuffer())
      );
    } else {
      throw new Error("Missing url", {
        cause: predictionResponse
      });
    }
    return json({ done: true });
  } catch (error$1) {
    console.error(error$1);
    if (error$1 instanceof Error) {
      console.error(error$1.cause);
      throw error(500, { message: error$1.message });
    }
    throw error(500);
  }
};
const _generatePhotos = async (payload, userInfo) => {
  let { theme, seed } = payload;
  if (theme) {
    theme = getPrompt(theme);
  }
  if (!userInfo.paid) {
    throw new Error("Payment required");
  }
  if (userInfo.in_training || !userInfo.trained || !userInfo.replicate_version_id) {
    throw new Error("Model not trained");
  }
  const negativePrompt = getNegativePrompt();
  console.log({ theme, negativePrompt, seed });
  const quantity = 50;
  const prompts = [
    "realistic passport portrait of @me as an jedi , perfect face, highly detailed, science fiction, star wars concept art, intricate details, bright colors, golden hour, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws.",
    "realistic passport portrait of @me as an cyberpunk blade runner, perfect face, dramatic pose, wearing japanese techwear, intricate complexity, bright colors, golden hour, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws.",
    "realistic passport portrait of @me as an officer, cyberpunk futuristic, neon, perfect face, reflective puffy coat, bright colors, golden hour, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws.",
    "realistic passport portrait of @me as an astronaut, futuristic, highly detailed, perfect face, ultra realistic, concept art, intricate textures, interstellar background, space travel, bright colors, golden hour, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws.",
    "realistic passport portrait of @me as an ninja, wearing a black hood and suit, perfect face, stealthy movements, dark night background, shadows and mist, bright colors, golden hour, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws.",
    "realistic passport portrait of @me as an Superhero , highly detailed, perfect face, science fiction, star wars concept art, intricate details, bright colors, golden hour, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws.",
    "realistic passport portrait of @me as an cosmic hero , perfect face, highly detailed, science fiction, star wars concept art, intricate details, bright colors, golden hour, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws."
  ];
  const promises = [];
  for (let i = 0; i < quantity; i++) {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    promises.push(
      runPrediction(
        userInfo.replicate_version_id,
        getReplacedPrompt(randomPrompt, userInfo.instance_class),
        negativePrompt,
        seed,
        userInfo.id
      ).then((predictionResponse) => {
        console.log("Predict response", predictionResponse);
        return supabaseClientAdmin.from("predictions").insert({
          id: predictionResponse.id,
          user_id: userInfo.id,
          status: predictionResponse.status
        });
      })
    );
  }
  await Promise.all(promises).then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      if (responses[i].error) {
        throw new Error("Error on insert prediction", {
          cause: responses[i].error
        });
      }
    }
  }).catch((err) => {
    throw new Error("Error on insert prediction", { cause: err });
  });
  await supabaseClientAdmin.from("user_info").update({
    counter: userInfo.counter + quantity
  }).eq("id", userInfo.id);
};
const POST = async (event) => {
  try {
    const body = await event.request.json();
    const { theme, seed } = body;
    let { prompt, quantity = 1 } = body;
    const { session } = await getSupabase(event);
    if (!session) {
      throw new Error("Session not valid");
    }
    const user = session.user;
    console.log("user", user);
    const userInfo = await getAdminUserInfo(session.user.id, supabaseClientAdmin);
    await _generatePhotos(
      {
        theme,
        seed,
        prompt,
        quantity
      },
      userInfo
    );
    return json({ done: true });
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
  POST,
  _generatePhotos
};
