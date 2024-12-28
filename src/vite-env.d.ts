/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface ImportMetaEnv {
	readonly VITE_PUBLIC_URL: string;
	readonly VITE_APP_VERSION: string;
	// 更多环境变量...
}
