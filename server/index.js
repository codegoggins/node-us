import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db/connect.js";

// Load environment variables FIRST (before any code that uses them)
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

// Connect to database, then start server
connectDB()
  .then(() => {
    app.get("/health", (req, res) => {
      res.send("API working");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error.message);
    process.exit(1);
  });
