import {
  type User,
  type InsertUser,
  type Service,
  type InsertService,
  type BlogPost,
  type InsertBlogPost,
  type BlogCategory,
  type InsertBlogCategory,
} from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getServices(): Promise<Service[]>;
  getService(id: string): Promise<Service | undefined>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;
  getServicesByBaseSlug(baseSlug: string): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
  updateService(id: string, service: Partial<InsertService>): Promise<Service | undefined>;
  deleteService(id: string): Promise<void>;

  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<void>;

  getBlogCategories(): Promise<BlogCategory[]>;
  getBlogCategory(id: string): Promise<BlogCategory | undefined>;
  getBlogCategoryBySlug(slug: string): Promise<BlogCategory | undefined>;
  createBlogCategory(category: InsertBlogCategory): Promise<BlogCategory>;
  updateBlogCategory(id: string, category: Partial<InsertBlogCategory>): Promise<BlogCategory | undefined>;
  deleteBlogCategory(id: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private services: Map<string, Service>;
  private blogPosts: Map<string, BlogPost>;
  private blogCategories: Map<string, BlogCategory>;

  constructor() {
    this.users = new Map();
    this.services = new Map();
    this.blogPosts = new Map();
    this.blogCategories = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getService(id: string): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    return Array.from(this.services.values()).find(
      (service) => service.slug === slug,
    );
  }

  async getServicesByBaseSlug(baseSlug: string): Promise<Service[]> {
    const allServices = Array.from(this.services.values());
    return allServices.filter(service => service.slug.startsWith(`${baseSlug}-in-`));
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = randomUUID();
    const service: Service = {
      id,
      title: insertService.title,
      slug: insertService.slug,
      content: insertService.content ?? null,
      metaTitle: insertService.metaTitle ?? null,
      metaDescription: insertService.metaDescription ?? null,
    };
    this.services.set(id, service);
    return service;
  }

  async updateService(
    id: string,
    serviceUpdate: Partial<InsertService>,
  ): Promise<Service | undefined> {
    const existingService = this.services.get(id);
    if (!existingService) {
      return undefined;
    }
    const updatedService = { ...existingService, ...serviceUpdate };
    this.services.set(id, updatedService);
    return updatedService;
  }

  async deleteService(id: string): Promise<void> {
    this.services.delete(id);
  }

  // Blog Posts methods
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug,
    );
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    const post: BlogPost = {
      id,
      title: insertPost.title,
      slug: insertPost.slug,
      content: insertPost.content ?? null,
      authorId: insertPost.authorId ?? null,
      metaTitle: insertPost.metaTitle ?? null,
      metaDescription: insertPost.metaDescription ?? null,
      featuredImage: insertPost.featuredImage ?? null,
      relatedServices: insertPost.relatedServices ?? null,
      createdAt: now,
      updatedAt: now,
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(
    id: string,
    postUpdate: Partial<InsertBlogPost>,
  ): Promise<BlogPost | undefined> {
    const existingPost = this.blogPosts.get(id);
    if (!existingPost) {
      return undefined;
    }
    const updatedPost = { 
      ...existingPost, 
      ...postUpdate,
      updatedAt: new Date()
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: string): Promise<void> {
    this.blogPosts.delete(id);
  }

  // Blog Categories methods
  async getBlogCategories(): Promise<BlogCategory[]> {
    return Array.from(this.blogCategories.values());
  }

  async getBlogCategory(id: string): Promise<BlogCategory | undefined> {
    return this.blogCategories.get(id);
  }

  async getBlogCategoryBySlug(slug: string): Promise<BlogCategory | undefined> {
    return Array.from(this.blogCategories.values()).find(
      (category) => category.slug === slug,
    );
  }

  async createBlogCategory(insertCategory: InsertBlogCategory): Promise<BlogCategory> {
    const id = randomUUID();
    const category: BlogCategory = {
      id,
      name: insertCategory.name,
      slug: insertCategory.slug,
    };
    this.blogCategories.set(id, category);
    return category;
  }

  async updateBlogCategory(
    id: string,
    categoryUpdate: Partial<InsertBlogCategory>,
  ): Promise<BlogCategory | undefined> {
    const existingCategory = this.blogCategories.get(id);
    if (!existingCategory) {
      return undefined;
    }
    const updatedCategory = { ...existingCategory, ...categoryUpdate };
    this.blogCategories.set(id, updatedCategory);
    return updatedCategory;
  }

  async deleteBlogCategory(id: string): Promise<void> {
    this.blogCategories.delete(id);
  }
}

export const storage = new MemStorage();
