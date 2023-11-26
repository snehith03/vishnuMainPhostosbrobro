

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.41123cc5.js","_app/immutable/chunks/index.64e18256.js","_app/immutable/chunks/stores.8d397b3c.js","_app/immutable/chunks/singletons.79630576.js"];
export const stylesheets = [];
export const fonts = [];
