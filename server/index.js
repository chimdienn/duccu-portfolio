import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve client build directory
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
    resumeUrl:
      "https://drive.google.com/file/d/1VPvp0MteNPnZ1hToLpLstc5dp4FE_wIm/view?usp=sharing",
    social: {
      github: "https://github.com/chimdienn",
      facebook: "https://www.facebook.com/duckukie/",
      instagram: "https://www.instagram.com/_duckieee_/",
      linkedin: "https://www.linkedin.com/in/quytrongductran/",
    },
  });
});

// SPA fallback
app.get(/^\/(?!api\/).*/, (_req, res) => {
  res.sendFile(path.join(buildDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
