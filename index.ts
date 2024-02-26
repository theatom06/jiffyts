import type { BunFile } from "bun";

interface AppConfig {};

type RouteHandler = (req: Request) => string | BunFile;

interface Route {
    path: string;
    handler: RouteHandler;
    contentType: string;
};

type RouteList = {
    get: Route[];
    post: Route[];
    put: Route[];
    delete: Route[];
    [key: string]: Route[];
};

class App {
    private _routes: RouteList = {
        get: [],
        post: [],
        put: [],
        delete: [],
    };

    private _notFound: string | BunFile = "Error: 404 Not Found";

    constructor(config: AppConfig = {}) {}

    public get(path: string, handler: RouteHandler, contentType: string = "text/plain") {
        this._routes.get.push({ path, handler, contentType });
    }

    public post(path: string, handler: RouteHandler, contentType: string = "text/plain") {
        this._routes.post.push({ path, handler, contentType });
    }

    public put(path: string, handler: RouteHandler, contentType: string = "text/plain") {
        this._routes.put.push({ path, handler, contentType });
    }

    public delete(path: string, handler: RouteHandler, contentType: string = "text/plain") {
        this._routes.delete.push({ path, handler, contentType });
    }

    public notFound(res: string | BunFile = "Default 404") {
        this._notFound = res;
    }

    private _serve(req: Request): Response {
        const method = req.method.toLowerCase();
        const routeType = this._routes[method];

        if (routeType) {

            for (const { path, handler, contentType } of routeType) {

                if (new URL(req.url).pathname === path) {

                    return new Response(handler(req), {
                        headers: {
                            "Content-Type": contentType,
                        },
                    });

                }

            }

        }

        return new Response(this._notFound, { status: 404 });
    }

    public listen(port: number): void {
        Bun.serve({
            fetch: (req) => this._serve(req),
            error: (error) => {
                return new Response(`<pre>${error.stack}</pre>`, {
                    headers: {
                        "Content-Type": "text/html",
                    },
                });
            },
            port,
        });
    }
}

export {
    App as default,
    type RouteHandler
};