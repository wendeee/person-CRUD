import mongoose from "mongoose";
import {
 createPerson,
 getAllPerson,
 getPerson,
 updatePerson,
 deletePerson,
} from "../services/person.services";
import { Request, Response } from "express";
interface Person {
 name: string;
 gender: string;
 country: string;
}
export const addPerson = async (req: Request, res: Response) => {
 const { name, gender, country } = req.body as Person;

 const person = await createPerson({ name, gender, country });

 if (!person) {
  res.status(400).json({
   status: "Failed",
   message: "An error occured while creating new person!",
  });
 }
 res.status(201).json({
  status: "success",
  person,
 });
};

export const getAllCreatedPerson = async (req: Request, res: Response) => {
 const allPersons = await getAllPerson();

 if (!allPersons) {
  res.status(404).json({
   status: "Failed",
   message: "Error occurred while fetching data!",
  });
 }

 res.status(200).json({
  status: "success",
  allPersons,
 });
};

export const getPersonByIdentifier = async (req: Request, res: Response) => {
 const { personIdentifier } = req.params;
 let person;
 if (mongoose.isObjectIdOrHexString(personIdentifier)) {
  person = await getPerson({ _id: personIdentifier });
 } else {
  const formattedIdentifier = personIdentifier.trim();
  person = await getPerson({
   name: { $regex: new RegExp(`^${formattedIdentifier}`, "i") },
  });
 }
 if (!person) {
  return res.status(404).json({
   status: "Failed",
   message: "Person not found!",
  });
 }
 res.status(200).json({
  status: "success",
  person,
 });
};

export const updatePersonData = async (req: Request, res: Response) => {
 const { personIdentifier } = req.params;
 let person;
 if (mongoose.isObjectIdOrHexString(personIdentifier)) {
  person = await updatePerson({ _id: personIdentifier }, req.body as Person);
 } else {
  const formattedIdentifier = personIdentifier.trim();
  const nameFilter = new RegExp(`^${formattedIdentifier}`, "i");

  person = await updatePerson({ name: nameFilter }, req.body as Person);
 }

 if (!person) {
  return res.status(400).json({
   status: "Failed",
   message: "Invalid body data",
  });
 }
 res.status(200).json({
  status: "success",
  person,
 });
};

export const deletePersonData = async (req: Request, res: Response) => {
 const { personIdentifier } = req.params;

 let message;
 if (mongoose.isObjectIdOrHexString(personIdentifier)) {
  message = await deletePerson({ _id: personIdentifier });
 } else {
  const formattedIdentifier = personIdentifier.trim();
  const nameFilter = new RegExp(`^${formattedIdentifier}`, "i");

  message = await deletePerson({ name: nameFilter });
 }

 res.status(200).json({
  status: "success",
  message,
 });
};
