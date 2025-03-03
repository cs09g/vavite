import { defineConfig } from "tsup";

export default defineConfig([
	{
		entry: ["./src/index.ts"],
		format: ["esm", "cjs"],
		platform: "node",
		target: "node14",
		dts: true,
	},
	{
		entry: [
			"./src/vite-dev-server.ts",
			"./src/http-dev-server.ts",
			"./src/cli.ts",
		],
		format: ["esm"],
	},
]);
