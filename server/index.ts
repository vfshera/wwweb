import { auth } from "~/.server/auth";
import type { AppBindings } from "./types";
import { createHonoServer } from "react-router-hono-server/node";

export default await createHonoServer<AppBindings>({
  beforeAll(server) {
    server.use(async (ctx, next) => {
      const session = await auth.api.getSession({
        headers: ctx.req.raw.headers,
      });

      if (!session) {
        ctx.set("user", null);
        ctx.set("session", null);

        return next();
      }

      ctx.set("user", session.user);
      ctx.set("session", session.session);

      return next();
    });
  },
  getLoadContext(ctx) {
    return {
      user: ctx.get("user"),
      session: ctx.get("session"),
    };
  },
});
