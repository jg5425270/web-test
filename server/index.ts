import express from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic } from "./vite";

const app = express();
app.use(express.json());

// Register API routes first
registerRoutes(app);

// Setup Vite or serve static files
if (process.env.NODE_ENV === "production") {
  serveStatic(app);
} else {
  await setupVite(app);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});