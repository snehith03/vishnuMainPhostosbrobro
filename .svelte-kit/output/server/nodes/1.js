

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.57ceab82.js","_app/immutable/chunks/index.64e18256.js","_app/immutable/chunks/stores.0a9bc1dc.js","_app/immutable/chunks/singletons.8f6ce276.js"];
export const stylesheets = [];
export const fonts = [];
