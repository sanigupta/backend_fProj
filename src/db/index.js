import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () => {
  const connectionInstance = await mongoose.connect(
    `${process.env.MONGODB_URI}/${db_name}`
  );

  //   console.log(`\n MongoDb connected !! DB HOST: ${connectionInstance.connection.host}`);
  console.log(connectionInstance);
  try {
  } catch (error) {
    console.error("database connection failed : " + error);
    throw error;
  }
};

export default connectDB;
