import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve client build directory (supports CRA `build/` or Vite `dist/`)
const clientRoot = path.resolve(__dirname, "..", "client");
const buildDir = fs.existsSync(path.join(clientRoot, "build"))
  ? path.join(clientRoot, "build")
  : path.join(clientRoot, "dist");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(buildDir));

// API Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

app.get("/api/portfolio-data", (_req, res) => {
  res.json({
    name: "Quy Trong Duc Tran",
    title: "Full Stack Developer",
    email: "your.email@example.com",
    resumeUrl: "https://drive.google.com/your-resume-link",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      facebook: "https://facebook.com/yourusername",
      instagram: "https://instagram.com/yourusername",
    },
  });
});

// SPA fallback — serve index.html for all other routes
app.get(/^\/(?!api\/).*/, (_req, res) => {
  res.sendFile(path.join(buildDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
