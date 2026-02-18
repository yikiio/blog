export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/highlight/highlight.css","css/highlight/highlight.dark.css","css/highlight/hljs.css","css/highlight/hljs.dark.css","css/highlight/prismjs.css","css/highlight/prismjs.dark.css","css/style/dark.css","css/style/main.css","js/b2t.js","js/darkmode.js","js/local-search.js"]),
	mimeTypes: {".css":"text/css",".js":"text/javascript"},
	_: {
		client: {start:"_app/immutable/entry/start.BgtJVtQO.js",app:"_app/immutable/entry/app.DBDxMIu4.js",imports:["_app/immutable/entry/start.BgtJVtQO.js","_app/immutable/chunks/B-Bnt9SC.js","_app/immutable/chunks/CW62DANx.js","_app/immutable/entry/app.DBDxMIu4.js","_app/immutable/chunks/B-Bnt9SC.js","_app/immutable/chunks/Tjq4F4Zo.js","_app/immutable/chunks/CW62DANx.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/2024/12/02/hello-world",
				pattern: /^\/2024\/12\/02\/hello-world\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/archives",
				pattern: /^\/archives\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/archives/2024",
				pattern: /^\/archives\/2024\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/archives/2024/12",
				pattern: /^\/archives\/2024\/12\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
