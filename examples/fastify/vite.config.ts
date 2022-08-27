import { defineConfig } from "vite";
import vavite from "vavite";

export default defineConfig({
	server: {
		hmr: {
			port: 4000,
		},
	},
	plugins: [
		vavite({
			serverEntry: "/server.ts",
			reloadOn: "static-deps-change",
			serveClientAssetsInDev: true,
		}),
	],
});
