

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.cc415692.js","_app/immutable/chunks/index.64e18256.js"];
export const stylesheets = [];
export const fonts = [];
