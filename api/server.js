const express = require("express");
const path = require("path");
const app = express();

// Serve frontend files
app.use(express.static(path.join(__dirname, "../public")));

// API Route
app.get("/api/data", (req, res) => {
    res.json({ message: "Hello from Vercel Backend!" });
});

// Serve index.html for all other routes (fixes 404)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
