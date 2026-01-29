import type { AuthSession } from "~/.server/auth";
import type { DB } from "~/.server/db";
import type { Env, PublicEnv } from "~/env.server";

export type SessionVariables = {
  user: AuthSession["user"] | null;
  session: AuthSession["session"] | null;
};

export type AppBindings = {
  Variables: SessionVariables;
};

export type WebSocketContextType = object;

export type BaseContext = SessionVariables & {
  appVersion: string;
  clientEnv: PublicEnv;
  env: Env;
  db: DB;
};

declare module "react-router" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface RouterContextProvider extends BaseContext {}
}
