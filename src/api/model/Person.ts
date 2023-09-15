import mongoose, { Schema } from "mongoose";
const PersonSchema = new Schema({
 name: {
  type: String,
  required: [true, "A user must have a name"],
 },
 gender: {
  type: String,
  enum: ["male", "female", "other"],
  required: [true, "A user specify a gender"],
 },

 country: {
  type: String,
  required: [true, "A user must specify a country"],
 },
});

export const Person = mongoose.model("Person", PersonSchema);
