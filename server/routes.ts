import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertServiceSchema, 
  insertBlogPostSchema, 
  insertBlogCategorySchema 
} from "@shared/schema";
import contentRoutes from "./contentRoutes";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Register content generation routes
  app.use(contentRoutes);

  app.get("/api/services", async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get("/api/services/:id", async (req, res) => {
    const service = await storage.getService(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  });

  app.get("/api/services/slug/:slug", async (req, res) => {
    const service = await storage.getServiceBySlug(req.params.slug);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  });

  app.get("/api/services/base/:baseSlug", async (req, res) => {
    const services = await storage.getServicesByBaseSlug(req.params.baseSlug);
    res.json(services);
  });

  app.post("/api/services", async (req, res) => {
    const validation = insertServiceSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json(validation.error);
    }
    const newService = await storage.createService(validation.data);
    res.status(201).json(newService);
  });

  app.put("/api/services/:id", async (req, res) => {
    const validation = insertServiceSchema.partial().safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json(validation.error);
    }
    const updatedService = await storage.updateService(
      req.params.id,
      validation.data,
    );
    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(updatedService);
  });

  app.delete("/api/services/:id", async (req, res) => {
    await storage.deleteService(req.params.id);
    res.status(204).send();
  });

  // Blog Posts API endpoints
  app.get("/api/blog/posts", async (req, res) => {
    const posts = await storage.getBlogPosts();
    res.json(posts);
  });

  app.get("/api/blog/posts/:id", async (req, res) => {
    const post = await storage.getBlogPost(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(post);
  });

  app.get("/api/blog/posts/slug/:slug", async (req, res) => {
    const post = await storage.getBlogPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(post);
  });

  app.post("/api/blog/posts", async (req, res) => {
    const validation = insertBlogPostSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json(validation.error);
    }
    const newPost = await storage.createBlogPost(validation.data);
    res.status(201).json(newPost);
  });

  app.put("/api/blog/posts/:id", async (req, res) => {
    const validation = insertBlogPostSchema.partial().safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json(validation.error);
    }
    const updatedPost = await storage.updateBlogPost(
      req.params.id,
      validation.data,
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(updatedPost);
  });

  app.delete("/api/blog/posts/:id", async (req, res) => {
    await storage.deleteBlogPost(req.params.id);
    res.status(204).send();
  });

  app.get("/api/blog/posts/related/:slug", async (req, res) => {
    try {
      const currentPost = await storage.getBlogPostBySlug(req.params.slug);
      if (!currentPost) {
        return res.status(404).json({ message: "Blog post not found" });
      }

      // Get all posts except the current one
      const allPosts = await storage.getBlogPosts();
      const relatedPosts = allPosts
        .filter(post => post.id !== currentPost.id)
        .slice(0, 3); // Limit to 3 related posts

      res.json(relatedPosts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch related posts" });
    }
  });

  // Blog Categories API endpoints
  app.get("/api/blog/categories", async (req, res) => {
    const categories = await storage.getBlogCategories();
    res.json(categories);
  });

  app.get("/api/blog/categories/:id", async (req, res) => {
    const category = await storage.getBlogCategory(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Blog category not found" });
    }
    res.json(category);
  });

  app.get("/api/blog/categories/slug/:slug", async (req, res) => {
    const category = await storage.getBlogCategoryBySlug(req.params.slug);
    if (!category) {
      return res.status(404).json({ message: "Blog category not found" });
    }
    res.json(category);
  });

  app.post("/api/blog/categories", async (req, res) => {
    const validation = insertBlogCategorySchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json(validation.error);
    }
    const newCategory = await storage.createBlogCategory(validation.data);
    res.status(201).json(newCategory);
  });

  app.put("/api/blog/categories/:id", async (req, res) => {
    const validation = insertBlogCategorySchema.partial().safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json(validation.error);
    }
    const updatedCategory = await storage.updateBlogCategory(
      req.params.id,
      validation.data,
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Blog category not found" });
    }
    res.json(updatedCategory);
  });

  app.delete("/api/blog/categories/:id", async (req, res) => {
    await storage.deleteBlogCategory(req.params.id);
    res.status(204).send();
  });

  const httpServer = createServer(app);

  return httpServer;
}
