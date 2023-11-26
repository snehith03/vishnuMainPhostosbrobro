export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1.jpeg","2.jpeg","AIStyles/Anime.png","AIStyles/Cowboy.png","AIStyles/Cricket.png","AIStyles/Cyberpunk.png","AIStyles/Gamer.png","AIStyles/Jedi.png","AIStyles/Stylish.png","AIStyles/Superhero.png","AIStyles/Wedding.png","american-express.svg","android-chrome-192x192.png","android-chrome-512x512.png","apple-pay.svg","apple-touch-icon.png","arrow.png","arrow.svg","avatars/man (1).jpeg","avatars/man (1).png","avatars/man (10).jpeg","avatars/man (10).png","avatars/man (2).jpeg","avatars/man (2).png","avatars/man (3).jpeg","avatars/man (3).png","avatars/man (4).jpeg","avatars/man (4).png","avatars/man (5).jpeg","avatars/man (5).png","avatars/man (6).jpeg","avatars/man (6).png","avatars/man (7).jpeg","avatars/man (7).png","avatars/man (8).jpeg","avatars/man (8).png","avatars/man (9).jpeg","avatars/man (9).png","avatars/man_from.jpeg","avatars/man_from.jpg","avatars/woman (1).jpeg","avatars/woman (1).png","avatars/woman (10).jpeg","avatars/woman (10).png","avatars/woman (11).jpeg","avatars/woman (11).png","avatars/woman (12).jpeg","avatars/woman (12).png","avatars/woman (2).jpeg","avatars/woman (2).png","avatars/woman (3).jpeg","avatars/woman (3).png","avatars/woman (4).jpeg","avatars/woman (4).png","avatars/woman (5).jpeg","avatars/woman (5).png","avatars/woman (6).jpeg","avatars/woman (6).png","avatars/woman (7).jpeg","avatars/woman (7).png","avatars/woman (8).jpeg","avatars/woman (8).png","avatars/woman (9).jpeg","avatars/woman (9).png","avatars/woman_from.jpeg","avatars/woman_from.jpg","favicon-16x16.png","favicon-32x32.png","favicon.ico","google-pay.svg","logo-xs.png","logo.png","mastercard-alt.svg","og.jpg","site.webmanifest","visa.svg"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.9298cb5d.js","app":"_app/immutable/entry/app.d3b1f4a5.js","imports":["_app/immutable/entry/start.9298cb5d.js","_app/immutable/chunks/index.64e18256.js","_app/immutable/chunks/singletons.8f6ce276.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.d3b1f4a5.js","_app/immutable/chunks/index.da8f1b77.js","_app/immutable/chunks/browser-ponyfill.82cba527.js","_app/immutable/chunks/db.a1cf1a92.js","_app/immutable/chunks/index.64e18256.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		routes: [
			{
				id: "/(homepage)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/_about",
				pattern: /^\/_about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/_help",
				pattern: /^\/_help\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/_legal/terms-and-conditions",
				pattern: /^\/_legal\/terms-and-conditions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/_signup",
				pattern: /^\/_signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/api/prediction",
				pattern: /^\/api\/prediction\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/prediction/_server.ts.js'))
			},
			{
				id: "/api/train",
				pattern: /^\/api\/train\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/train/_server.ts.js'))
			},
			{
				id: "/api/webhooks/payment",
				pattern: /^\/api\/webhooks\/payment\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/webhooks/payment/_server.ts.js'))
			},
			{
				id: "/api/webhooks/[slug]/instance_data",
				pattern: /^\/api\/webhooks\/([^/]+?)\/instance_data\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/webhooks/_slug_/instance_data/_server.ts.js'))
			},
			{
				id: "/api/webhooks/[slug]/prediction_complete",
				pattern: /^\/api\/webhooks\/([^/]+?)\/prediction_complete\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/webhooks/_slug_/prediction_complete/_server.ts.js'))
			},
			{
				id: "/api/webhooks/[slug]/training_complete",
				pattern: /^\/api\/webhooks\/([^/]+?)\/training_complete\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/webhooks/_slug_/training_complete/_server.ts.js'))
			},
			{
				id: "/(app)/app",
				pattern: /^\/app\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(homepage)/checkout",
				pattern: /^\/checkout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/(homepage)/checkout/_server.ts.js'))
			},
			{
				id: "/(homepage)/contacts",
				pattern: /^\/contacts\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(homepage)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(homepage)/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(homepage)/payment_success",
				pattern: /^\/payment_success\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
