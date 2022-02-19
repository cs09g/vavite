import { Middleware } from "koa";
import viteDevServer from "@vavite/expose-vite-dev-server/vite-dev-server";
import nav from "./nav";

const barRoute: Middleware = async (ctx, next) => {
	let html = "<h1>Hello from page /bar</h1>" + nav;

	if (import.meta.env.DEV) {
		html = await viteDevServer!.transformIndexHtml(ctx.url, html);
	}

	ctx.body = html;
};

export default barRoute;
