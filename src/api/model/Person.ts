import mongoose, { Schema } from "mongoose";
const PersonSchema = new Schema({
 name: {
  type: String,
  required: [true, "A user must have a name"],
 },
 gender: {
  type: String,
  enum: ["male", "female", "other"],
 },

 country: {
  type: String,
 },
});

export const Person = mongoose.model("Person", PersonSchema);
