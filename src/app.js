import express from "express";
const app = express();

import todoRoutes from "./routes/todoRoutes.js";

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/v1/todos", todoRoutes);

export default app;
