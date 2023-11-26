

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(homepage)/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.6431619f.js","_app/immutable/chunks/index.64e18256.js","_app/immutable/chunks/Button.ec37116f.js"];
export const stylesheets = ["_app/immutable/assets/5.45d59a47.css"];
export const fonts = [];
