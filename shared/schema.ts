import { relations, sql } from "drizzle-orm";
import {
  pgTable,
  text,
  varchar,
  timestamp,
  primaryKey,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const services = pgTable("services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
});

export const blogCategories = pgTable("blog_categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
});

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content"),
  authorId: varchar("author_id").references(() => users.id),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  featuredImage: text("featured_image"),
  relatedServices: text("related_services"), // JSON array of service IDs
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const blogPostsToCategories = pgTable(
  "blog_posts_to_categories",
  {
    postId: varchar("post_id")
      .notNull()
      .references(() => blogPosts.id),
    categoryId: varchar("category_id")
      .notNull()
      .references(() => blogCategories.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.postId, t.categoryId] }),
  }),
);

export const usersRelations = relations(users, ({ many }) => ({
  blogPosts: many(blogPosts),
}));

export const blogPostsRelations = relations(blogPosts, ({ one, many }) => ({
  author: one(users, {
    fields: [blogPosts.authorId],
    references: [users.id],
  }),
  blogPostsToCategories: many(blogPostsToCategories),
}));

export const blogCategoriesRelations = relations(
  blogCategories,
  ({ many }) => ({
    blogPostsToCategories: many(blogPostsToCategories),
  }),
);

export const blogPostsToCategoriesRelations = relations(
  blogPostsToCategories,
  ({ one }) => ({
    post: one(blogPosts, {
      fields: [blogPostsToCategories.postId],
      references: [blogPosts.id],
    }),
    category: one(blogCategories, {
      fields: [blogPostsToCategories.categoryId],
      references: [blogCategories.id],
    }),
  }),
);

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});
export const insertServiceSchema = createInsertSchema(services);
export const insertBlogCategorySchema = createInsertSchema(blogCategories);
export const insertBlogPostSchema = createInsertSchema(blogPosts);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;
export type BlogCategory = typeof blogCategories.$inferSelect;
export type InsertBlogCategory = z.infer<typeof insertBlogCategorySchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
