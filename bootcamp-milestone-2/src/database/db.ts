// db.ts
import mongoose from "mongoose";
import Blog from "@/database/blogSchema";

const url: string = process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */

export const connectDB = async () => {
  if (!connection) {
    connection = await mongoose.connect(url);
    return connection;
  }
};

export const getBlogs = async () => {
	await connectDB();
  
	try {
	  // Query for all blogs and sort by date
	  const blogs = await Blog.find().sort({ date: -1 }).orFail();
	  // return stuff here
	  return blogs;
	} catch (err) {
	  return null;
	}
  };