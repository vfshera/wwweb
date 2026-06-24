import { defineConfig } from "drizzle-kit";
import { env } from "~/env.server";

export default defineConfig({
  schema: "./app/.server/db/schema/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
