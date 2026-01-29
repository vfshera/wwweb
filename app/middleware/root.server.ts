import type { Route } from "../+types/root";
import { redirect } from "react-router";
import {
  AUTHENTICATED_REDIRECT,
  DASHBOARD_PATH,
  SIGNIN_PATH,
  SIGNUP_PATH,
  UNAUTHENTICATED_REDIRECT,
} from "~/constants";
import { appContext } from "$/server/context";

/**
 * - This middleware(s) will run for all routes.
 *
 * - Ensure to export rootMiddleware as middleware in root.tsx.
 */
export const rootMiddleware: Route.MiddlewareFunction[] = [
  async function authMiddleware({ context, request }) {
    const url = new URL(request.url);

    const { session } = context.get(appContext);

    const isAuthPage =
      url.pathname === SIGNIN_PATH || url.pathname === SIGNUP_PATH;

    if (isAuthPage && session) {
      throw redirect(AUTHENTICATED_REDIRECT);
    }

    if (url.pathname.startsWith(DASHBOARD_PATH) && !session) {
      throw redirect(UNAUTHENTICATED_REDIRECT);
    }
  },
];
