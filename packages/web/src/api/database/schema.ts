import { sqliteTable, text } from "drizzle-orm/sqlite-core";

const fields = () => ({
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  consentAt: text("consent_at").notNull(),
  createdAt: text("created_at").notNull(),
  status: text("status").notNull().default("pending"),
});
export const contactRequests = sqliteTable("contact_requests", fields());
export const appointmentRequests = sqliteTable("appointment_requests", {
  ...fields(),
  requestedDate: text("requested_date").notNull(),
  requestedTime: text("requested_time").notNull(),
  timezone: text("timezone").notNull(),
});

/**
 * Define your database schema here, then apply it with `bun run db:push`
 * (from packages/web). Re-export any generated schema from this file
 * (e.g. Better Auth's auth-schema.ts) so drizzle generates complete migrations.
 * Table patterns and conventions: skills/app/references/api.md
 */
