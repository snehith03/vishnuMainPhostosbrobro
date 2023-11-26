import * as universal from '../entries/pages/(app)/app/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/app/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/app/+page.ts";
export const imports = ["_app/immutable/nodes/4.524760e1.js","_app/immutable/chunks/getSupabase.92680f2a.js","_app/immutable/chunks/index.da8f1b77.js","_app/immutable/chunks/browser-ponyfill.82cba527.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.64e18256.js","_app/immutable/chunks/stores.0a9bc1dc.js","_app/immutable/chunks/singletons.8f6ce276.js","_app/immutable/chunks/Button.ec37116f.js","_app/immutable/chunks/Input.9b0282a1.js","_app/immutable/chunks/Title.829fe55f.js","_app/immutable/chunks/db.a1cf1a92.js","_app/immutable/chunks/utilities.3a4ef1d9.js"];
export const stylesheets = ["_app/immutable/assets/4.2dfd3e55.css"];
export const fonts = [];
