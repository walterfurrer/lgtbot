import {
  sqliteTable,
  integer,
  text,
} from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const blogPosts = sqliteTable('blog_posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  submittedBy: text('submitted_by').notNull(), // discord server nickname
  url: text('url').notNull().unique(),
  status: text('status').notNull().default('submitted'),
  createdAt: integer('created_at', { mode: 'timestamp_ms' })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
    .notNull()
    .default(sql`CURRENT_TIMESTEAMP`),
});