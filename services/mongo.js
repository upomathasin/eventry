import mongoose from "mongoose";
export async function dbConnection() {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("connected");
    return conn;
  } catch (err) {
    console.log(err);
  }
}
