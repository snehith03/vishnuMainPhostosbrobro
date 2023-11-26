import { P as PRIVATE_REPLICATE_INSTANCE_TOKEN, b as PRIVATE_REPLICATE_MAX_TRAIN_STEPS, c as PRIVATE_REPLICATE_USERNAME, d as PRIVATE_REPLICATE_API_TOKEN } from "./private.js";
import { b as PUBLIC_WEBSITE_HOST } from "./public.js";
async function getClient({
  path,
  method = "GET",
  body,
  experimental = false
}) {
  const response = await fetch(
    `${experimental ? "https://dreambooth-api-experimental.replicate.com" : "https://api.replicate.com"}${path}`,
    {
      ...body ? { body: JSON.stringify(body) } : {},
      method,
      headers: {
        Authorization: `Token ${PRIVATE_REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json"
      }
    }
  );
  if (!response.ok) {
    throw new Error(await response.text());
  }
  return await response.json();
}
async function getTrainingStatus(user) {
  return await getClient({
    path: `/v1/trainings/${user.id}`,
    experimental: true
  });
}
async function runTrain(instanceClass, user, theme, prompt, quantity) {
  return await getClient({
    path: "/v1/trainings",
    body: {
      input: {
        instance_prompt: `a photo of a ${PRIVATE_REPLICATE_INSTANCE_TOKEN} ${instanceClass}`,
        class_prompt: `a photo of a ${instanceClass}`,
        instance_data: `${PUBLIC_WEBSITE_HOST}/api/webhooks/${user.id}/instance_data`,
        max_train_steps: Number(PRIVATE_REPLICATE_MAX_TRAIN_STEPS) || 2e3,
        num_class_images: 200,
        learning_rate: 1e-6
      },
      model: `${PRIVATE_REPLICATE_USERNAME}/${user.id}`,
      webhook_completed: `${PUBLIC_WEBSITE_HOST}/api/webhooks/${user.id}/training_complete?theme=${encodeURIComponent(theme)}&prompt=${encodeURIComponent(
        prompt
      )}&quantity=${encodeURIComponent(quantity)}`
    },
    method: "POST",
    experimental: true
  });
}
async function getPredictionStatus(predictID) {
  return await getClient({
    path: `/v1/predictions/${predictID}`
  });
}
async function runPrediction(version, prompt, negativePrompt, seed, userID) {
  return await getClient({
    path: "/v1/predictions",
    body: {
      input: {
        prompt,
        negative_prompt: negativePrompt,
        ...seed && !isNaN(parseInt(seed)) ? { seed: parseInt(seed) } : {},
        disable_safety_check: true
      },
      webhook_completed: `${PUBLIC_WEBSITE_HOST}/api/webhooks/${userID}/prediction_complete`,
      version
    },
    method: "POST"
  });
}
export {
  getTrainingStatus as a,
  runTrain as b,
  getPredictionStatus as g,
  runPrediction as r
};
