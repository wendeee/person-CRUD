import express, { Request, Response, Router } from "express";

import {
 addPerson,
 getAllCreatedPerson,
 getPersonByIdentifier,
 updatePersonData,
 deletePersonData,
} from "../controller/person.controller";

export const router = express.Router();
router.route("/").post(addPerson).get(getAllCreatedPerson);

router
 .route("/:personIdentifier")
 .get(getPersonByIdentifier)
 .patch(updatePersonData)
 .delete(deletePersonData);
