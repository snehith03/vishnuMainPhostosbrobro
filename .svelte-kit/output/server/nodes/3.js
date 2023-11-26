import * as universal from '../entries/pages/(homepage)/_layout.ts.js';
import * as server from '../entries/pages/(homepage)/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(homepage)/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(homepage)/+layout.ts";
export { server };
export const server_id = "src/routes/(homepage)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.c21eb65e.js","_app/immutable/chunks/getSupabase.92680f2a.js","_app/immutable/chunks/index.da8f1b77.js","_app/immutable/chunks/browser-ponyfill.82cba527.js","_app/immutable/chunks/index.64e18256.js","_app/immutable/chunks/MessagesQueue.f21a34e9.js","_app/immutable/chunks/stores.0a9bc1dc.js","_app/immutable/chunks/singletons.8f6ce276.js","_app/immutable/chunks/Button.ec37116f.js","_app/immutable/chunks/navigation.4022d6cb.js","_app/immutable/chunks/utilities.3a4ef1d9.js","_app/immutable/chunks/Alert.2730a5fa.js","_app/immutable/chunks/db.a1cf1a92.js"];
export const stylesheets = ["_app/immutable/assets/MessagesQueue.7bf79d88.css"];
export const fonts = [];
