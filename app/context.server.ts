import { createContext } from "react-router";
import { db } from "~/.server/db";
import { clientEnv, env } from "~/env.server";
import { auth } from "./.server/auth";

export async function createAppContext(request: Request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  return {
    db,
    env,
    clientEnv,
    user: session?.user || null,
    session: session?.session || null,
  };
}

export type AppContext = Awaited<ReturnType<typeof createAppContext>>;

export const appContext = createContext<AppContext>();
