import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
