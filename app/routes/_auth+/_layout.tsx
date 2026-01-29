import type { Route } from "./+types/_layout";
import { Outlet, redirect } from "react-router";
import { AUTHENTICATED_REDIRECT } from "~/constants";
import { appContext } from "$/server/context";

export async function loader({ context }: Route.LoaderArgs) {
  const { user } = context.get(appContext);

  if (user) {
    return redirect(AUTHENTICATED_REDIRECT);
  }

  return {};
}

export default function AuthLayout() {
  return (
    <div className="grid h-screen items-center p-8 text-center">
      <Outlet />
    </div>
  );
}
