

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_legal/terms-and-conditions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.2dd4bb90.js","_app/immutable/chunks/index.64e18256.js"];
export const stylesheets = [];
export const fonts = [];
