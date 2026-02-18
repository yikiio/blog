import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DcVihQKg.js","_app/immutable/chunks/Tjq4F4Zo.js","_app/immutable/chunks/B-Bnt9SC.js","_app/immutable/chunks/mNIq85or.js","_app/immutable/chunks/DYcvVT5P.js"];
export const stylesheets = [];
export const fonts = [];
