import * as universal from '../entries/pages/(app)/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/+layout.ts";
export const imports = ["_app/immutable/nodes/2.792c2b5b.js","_app/immutable/chunks/getSupabase.92680f2a.js","_app/immutable/chunks/index.da8f1b77.js","_app/immutable/chunks/browser-ponyfill.82cba527.js","_app/immutable/chunks/index.d7eb2526.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.64e18256.js","_app/immutable/chunks/MessagesQueue.1472e8c5.js","_app/immutable/chunks/stores.8d397b3c.js","_app/immutable/chunks/singletons.79630576.js","_app/immutable/chunks/Button.ec37116f.js","_app/immutable/chunks/navigation.d455a952.js","_app/immutable/chunks/utilities.3a7a3e27.js","_app/immutable/chunks/Alert.2730a5fa.js","_app/immutable/chunks/db.a1cf1a92.js"];
export const stylesheets = ["_app/immutable/assets/MessagesQueue.7bf79d88.css"];
export const fonts = [];
