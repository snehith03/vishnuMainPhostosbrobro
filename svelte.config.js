import { vitePreprocess } from '@sveltejs/kit/vite';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: vercel({
			// if true, will deploy the app using edge functions
			// (https://vercel.com/docs/concepts/functions/edge-functions)
			// rather than serverless functions
			maxDuration: 60,

			// an array of dependencies that esbuild should treat
			// as external when bundling functions
			external: [],

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: false
		})
	}
};

export default config;
