const express = require("express");
const app = express();

app.get("/api/data", (req, res) => {
    res.json({ message: "Hello from Vercel Backend!" });
});

module.exports = app;
