import mongoose from "mongoose";
import { config } from "./config";
require("dotenv").config();

export const DB_CONNECTION = async () => {
 try {
  mongoose.connect(config.MONGODB_URL);
  console.log("Connection to DB successful!");
 } catch (err) {
  console.log("Connection to DB failed!");
 }
};
