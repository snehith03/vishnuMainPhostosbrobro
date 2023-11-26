

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(homepage)/contacts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.efaba501.js","_app/immutable/chunks/index.64e18256.js"];
export const stylesheets = [];
export const fonts = [];
