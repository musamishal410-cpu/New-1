import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";
import { homeContent } from "./content.js";

const app = express();
const PORT = process.env.PORT || 5000;
const appointments = [];

app.use(cors());
app.use(express.json());

app.get("/api/home", (_req, res) => res.json(homeContent));

app.post("/api/appointments", (req, res) => {
  const { name, phone, message } = req.body || {};
  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }
  const entry = { id: appointments.length + 1, name, phone, message: message || "", createdAt: new Date().toISOString() };
  appointments.push(entry);
  res.status(201).json({ ok: true, id: entry.id });
});

const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), "../client/dist");
if (existsSync(dist)) {
  app.use(express.static(dist));
  app.get("*", (_req, res) => res.sendFile(path.join(dist, "index.html")));
}

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
