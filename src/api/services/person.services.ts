import mongoose from "mongoose";
import { getPersonByIdentifier } from "../controller/person.controller";
import { Person } from "../model/Person";
export const createPerson = async (data) => {
 try {
  const person = await Person.create(data);
  await person.save();
  return person;
 } catch (err) {
  throw err;
 }
};

export const getAllPerson = async () => {
 try {
  const allPerson = await Person.find();
  return allPerson;
 } catch (err) {
  throw err;
 }
};

export const getPerson = async (personIdentifier) => {
 try {
  const person = await Person.findOne(personIdentifier);
  return person;
 } catch (err) {
  throw err;
 }
};

export const updatePerson = async (personIdentifier, data) => {
 try {
  const person = await Person.findOneAndUpdate(personIdentifier, data, {
   new: true,
  });
  return person;
 } catch (err) {
  throw err;
 }
};

export const deletePerson = async (personIdentifier) => {
 //  try {
 //   let filter;

 //   // Check if personIdentifier is a valid MongoDB ObjectId (ID)
 //   if (mongoose.isValidObjectId(personIdentifier)) {
 //    filter = { _id: personIdentifier };
 //   } else {
 //    filter = { name: personIdentifier };
 //   }
 //   const person = await Person.findOneAndDelete(filter);
 //   return "Person deleted!";
 //  } catch (err) {
 //   throw err;
 //  }

 try {
  await Person.findOneAndDelete(personIdentifier);
  return "person deleted!";
 } catch (err) {
  throw err;
 }
};
