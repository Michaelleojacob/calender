// utils/mongodb.js
import { MongoClient } from "mongodb";

// MongoDB connection URI
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/my_database";

// Global MongoClient variable to persist across hot reloads in Next.js
let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to your .env.local file");
}

if (!clientPromise) {
  // Create a new MongoDB client if not already created
  client = new MongoClient(MONGODB_URI);
  clientPromise = client.connect();
} else {
  clientPromise = clientPromise;
}

export default clientPromise;
