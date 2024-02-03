const { Appsignal } = require("@appsignal/nodejs");

const appSignal = new Appsignal({
 active: true,
 name: "techbytes",
 // Your app's AppSignal Push API key. We don't recommend committing this key.
 // Set the Push API key using a system environment variable.
 // pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY,
 pushApiKey: "adfe8e5e-00d4-413f-8e5d-762581a1e8cf",
});

// import { expressErrorHandler } from "@appsignal/nodejs";
const {
 expressMiddleware,
 expressErrorHandler,
} = require("@appsignal/express");
import express, { Express, Request, Response, NextFunction } from "express";
import { AppError } from "./util";
import { router as PersonRouter } from "./api/routes/person.route";
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressMiddleware(appSignal));

app.use("/api", PersonRouter);
app.get("/", (req: Request, res: Response) => {
 res.status(200).json("Success!");
});
app.use(expressErrorHandler());

app.use("*", (req: Request, res: Response, next: NextFunction) => {
 const err: AppError = new AppError(`${req.originalUrl} not found!`, 404);
 next(err);
});
export default app;
