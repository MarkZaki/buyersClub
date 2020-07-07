const express = require("express");
require("dotenv").config();

const mongoose = require("./config/mongo.config");

// Check if Mongo Connection Exists
if (!Object.keys(mongoose).length) return;

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/verify", require("./routes/tokens.route"));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
