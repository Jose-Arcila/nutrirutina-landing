import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

/**
 * Example table — replace or extend as needed.
 * Each table you want to track goes here, then run `npm run db:generate`.
 */
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  name: text("name"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// Re-export all tables for convenience (empty since defined here)

