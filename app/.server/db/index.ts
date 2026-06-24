import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "~/env.server";
import * as schema from "./schema/auth";

export const db = drizzle(env.DATABASE_URL, { schema });

export type DB = typeof db;
