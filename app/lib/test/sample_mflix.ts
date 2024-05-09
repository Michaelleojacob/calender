import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../mangodb";

async function getSample_mflixComments() {
  try {
    const client = await clientPromise;
    if (!client) throw new Error("error getting client in getSample_mflixDB");
    const db = client.db("Cluster0");
    const comments = db.collection("comments");
    return comments;
  } catch (e) {
    return console.log("error in getSample_mflixDB", e);
  }
}
