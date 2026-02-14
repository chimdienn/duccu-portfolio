export default function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  res.status(200).json({
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
}
