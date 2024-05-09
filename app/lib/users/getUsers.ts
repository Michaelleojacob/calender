import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../mangodb";

async function getUserDB() {
  try {
    const client = await clientPromise;
    if (!client) throw new Error("error getting the client in getUserDB");
    const db = client?.db("Cluster0");
    const users = db.collection("users");
    return users;
  } catch (e) {
    console.log("error in getUserDB", e);
  }
}

async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await getUserDB();
    if (!users) throw new Error("Error in getUsers");
    const results = await users.find({}).toArray();
    return res.status(200).json(results);
  } catch (e) {
    return console.log("error in getUsers", e);
  }
}

export default getUsers;
