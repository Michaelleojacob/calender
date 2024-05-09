import { MongoClient } from "mongodb";

// Replace with your MongoDB Atlas connection string
const MONGODB_URI = process.env.MONGODB_URI;

// Check if the environment variable for the MongoDB URI is set
if (!MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to your .env.local file");
}

// Global MongoClient variable to persist across hot reloads in Next.js
let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

if (!clientPromise) {
  // Create a new MongoDB client if not already created
  client = new MongoClient(MONGODB_URI);
  clientPromise = client.connect();
}

// Ensure that the promise is always initialized to avoid undefined cases
clientPromise = clientPromise ?? Promise.resolve(client);

export default clientPromise;
