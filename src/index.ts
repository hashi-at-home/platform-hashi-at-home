import { Hono } from "hono";
import { Home } from "./pages/Home";

const app = new Hono<{ Bindings: CloudflareBindings }>();

// Home page - render JSX
app.get("/", (c) => {
  return c.html(Home());
});

// API route for testing
app.get("/message", (c) => {
  return c.text("Hello Hono!");
});

// Fallback: serve static assets for all other routes
app.get("*", (c) => {
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
