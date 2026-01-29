import { createId } from "@paralleldrive/cuid2";
import { text, timestamp } from "drizzle-orm/pg-core";

/**
 *  Generates a unique ID using `createId`.
 *  @see - https://github.com/paralleldrive/cuid2
 */
export const createIdFn = () => createId();

export const primaryKeyCuid2 = text("id")
  .primaryKey()
  .$defaultFn(() => createId());

export const createdAtTimestamp = timestamp("created_at", {
  mode: "date",
})
  .defaultNow()
  .notNull();

export const updatedAtTimestamp = timestamp("updated_at", {
  mode: "date",
})
  .defaultNow()
  .$onUpdateFn(() => new Date())
  .notNull();
