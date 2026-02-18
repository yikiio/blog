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
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/archives/","/archives/2024/12/","/2024/12/02/hello-world/","/archives/2024/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
