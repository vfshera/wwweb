import type { Route } from "./+types/index";
import { Link } from "react-router";
import { auth } from "~/.server/auth";

export function meta() {
  return [
    { title: "React Router + Better Auth" },
    { name: "description", content: "React Router 7 + Better Auth" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const session = await auth.api.getSession({ headers: request.headers });

  return { userName: session?.user?.name };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="grid h-screen items-center p-8 text-center">
      <div className="space-y-10">
        <div>
          <h1 className="text-4xl">React Router 8 + Better Auth</h1>
        </div>
        <div className="mx-auto flex max-w-[600px] justify-center gap-4">
          {loaderData.userName ? (
            <div className="flex flex-col gap-5">
              <p className="bg-secondary text-secondary-foreground rounded px-4 py-2.5">
                Welcome, {loaderData.userName}
              </p>
              <Link
                to="/dashboard"
                className="bg-primary text-primary-foreground rounded px-4 py-2.5"
              >
                Go to Dashboard
              </Link>
            </div>
          ) : (
            <>
              {" "}
              <Link
                to="/signin"
                className="bg-primary text-primary-foreground rounded px-4 py-2.5"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-secondary text-secondary-foreground rounded border border-black px-4 py-2.5"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
