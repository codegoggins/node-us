import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Attempt connection to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_NAME,
    });

    console.log(`MongoDB Connected | Database: ${conn.connection.name}`);

    // Connection event listeners for monitoring
    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to DB");
    });

    mongoose.connection.on("error", (err) => {
      console.error(`Mongoose connection error: ${err.message}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose disconnected from DB");
    });

    // Graceful shutdown handlers
    const gracefulShutdown = async (signal) => {
      console.log(`${signal} received. Closing MongoDB connection...`);
      await mongoose.connection.close();
      console.log("MongoDB connection closed.");
      process.exit(0);
    };

    // Handle application termination signals
    process.on("SIGINT", () => gracefulShutdown("SIGINT"));
    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
