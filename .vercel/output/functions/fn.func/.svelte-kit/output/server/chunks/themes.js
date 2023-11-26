var InstanceClass = /* @__PURE__ */ ((InstanceClass2) => {
  InstanceClass2["man"] = "Man";
  InstanceClass2["woman"] = "Woman";
  InstanceClass2["youngmale"] = "youngmale";
  InstanceClass2["youngfemale"] = "youngfemale";
  InstanceClass2["cat"] = "Cat";
  return InstanceClass2;
})(InstanceClass || {});
const prompts = [
  {
    name: "Profile Pic",
    instance_classes: [],
    prompt: "8k linkedin realistic closeup portrait of @me in a suit with studio lighting, bokeh, corporate portrait photograph, best corporate photography photo winner, looking to camera, centred uncropped, meticulous detail, hyperrealistic."
  },
  {
    name: "Jedi",
    instance_classes: [],
    prompt: "realistic closeup portrait of @me as a jedi , highly detailed, science fiction, star wars concept art, intricate details, bright colors, golden hour, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws."
  },
  {
    name: "paladin",
    instance_classes: ["Man", "Woman", InstanceClass.couple],
    prompt: "closeup portrait of @me as a paladin, wearing brilliant white armor and a crown, fantasy concept art, artstation trending, highly detailed, beautiful landscape in the background, art by wlop, greg rutkowski, thierry doizon, charlie bowater, alphonse mucha, golden hour lighting, ultra realistic."
  },
  {
    name: "astronaut",
    instance_classes: ["Man", "Woman", InstanceClass.couple],
    prompt: "closeup portrait of @me as an astronaut, futuristic, highly detailed, ultra realistic, concept art, intricate textures, interstellar background, space travel, art by alphonse mucha, ryan kittleson, greg rutkowski, leesha hannigan, stephan martiniere, stanley artgerm lau."
  },
  {
    name: "ninja",
    instance_classes: ["Man", "Woman", InstanceClass.couple],
    prompt: "closeup portrait of @me as a ninja, wearing a black hood and suit, stealthy movements, dark night background, shadows and mist, detailed and realistic, art by kazuya yamashita, yuya kanzaki, yang zhizhuo, digital painting, photorealism, 8k resolution."
  },
  {
    name: "pirate",
    instance_classes: ["Man", "Woman", InstanceClass.couple],
    prompt: "closeup portrait of @me as a pirate, wild and crazy, bandana, eye patch, golden hoop earrings, tattered and ripped clothes, detailed tattoos, rough and rugged, art by alphonse mucha, kai carpenter, ignacio fernandez rios, charlie bowater, noir photorealism, ultra real."
  },
  {
    name: "superhero",
    instance_classes: ["Man", "Woman", InstanceClass.couple],
    prompt: "closeup portrait of @me as a superhero, dynamic lighting, intense colors, detailed costume, artstation trending, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws, Sharp focus, dslr photo, HD, UHD, 8K."
  },
  {
    name: "knight",
    instance_classes: ["Man", "Woman", InstanceClass.couple],
    prompt: "closeup portrait of @me as a knight wearing a full suit of armor, intricate details, majestic and powerful, bright shining silver armor, matching blue cape, a golden crown, artstation trending, highly detailed, digital painting, art by wlop, greg rutkowski, and charlie bowater."
  },
  {
    name: "cyborg",
    instance_classes: ["Man", "Woman", InstanceClass.couple],
    prompt: "closeup portrait of @me as a cyborg, mechanical parts, ultra realistic, concept art, intricate details, eerie, highly detailed, photorealistic, 8k, unreal engine. art by artgerm and greg rutkowski and charlie bowater and magali villeneuve and alphonse mucha, golden hour, cyberpunk, robotic, steampunk, neon colors, metallic textures."
  },
  {
    name: "cyborg",
    instance_classes: ["Man", "Woman", InstanceClass.couple],
    prompt: "8k linkedin realistic closeup portrait of @me in a suit with studio lighting, bokeh, corporate portrait photograph, best corporate photography photo winner, looking to camera, centred uncropped, meticulous detail, hyperrealistic."
  }
];
const getPrompt = (name) => prompts.find((prompt) => prompt.name == name)?.prompt;
export {
  getPrompt as g
};
