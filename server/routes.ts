import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { seoPrerender } from "./seo-prerender";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.use(seoPrerender);

  return httpServer;
}
