
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	 kit: {
    adapter: adapter({
      maxDuration: 60,
	  external: [],

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: false
    }),
  },
}
export default config;
