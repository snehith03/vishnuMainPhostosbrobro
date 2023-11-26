

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_help/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.7e7800b8.js","_app/immutable/chunks/index.64e18256.js"];
export const stylesheets = [];
export const fonts = [];
