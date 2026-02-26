const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OPENWEATHER_API_KEY;

if (!API_KEY)
  console.warn("OPENWEATHER_API_KEY not set — /api/weather will fail.");

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ message: "city required" });

  try {
    const fetcher = globalThis.fetch
      ? globalThis.fetch
      : (...a) => require("node-fetch")(...a);
    const r = await fetcher(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`,
    );
    const data = await r.json();
    if (!r.ok) return res.status(r.status).json(data);
    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: "server error" });
  }
});

// Replace the problematic route with a catch-all middleware:
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`),
);
