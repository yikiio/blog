
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/2024" | "/2024/12" | "/2024/12/02" | "/2024/12/02/hello-world" | "/archives" | "/archives/2024" | "/archives/2024/12";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/2024": Record<string, never>;
			"/2024/12": Record<string, never>;
			"/2024/12/02": Record<string, never>;
			"/2024/12/02/hello-world": Record<string, never>;
			"/archives": Record<string, never>;
			"/archives/2024": Record<string, never>;
			"/archives/2024/12": Record<string, never>
		};
		Pathname(): "/" | "/2024" | "/2024/" | "/2024/12" | "/2024/12/" | "/2024/12/02" | "/2024/12/02/" | "/2024/12/02/hello-world" | "/2024/12/02/hello-world/" | "/archives" | "/archives/" | "/archives/2024" | "/archives/2024/" | "/archives/2024/12" | "/archives/2024/12/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/css/highlight/highlight.css" | "/css/highlight/highlight.dark.css" | "/css/highlight/hljs.css" | "/css/highlight/hljs.dark.css" | "/css/highlight/prismjs.css" | "/css/highlight/prismjs.dark.css" | "/css/style/dark.css" | "/css/style/main.css" | "/js/b2t.js" | "/js/darkmode.js" | "/js/local-search.js" | string & {};
	}
}