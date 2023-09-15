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
 try {
  await Person.findOneAndDelete(personIdentifier);
  return "person deleted!";
 } catch (err) {
  throw err;
 }
};
