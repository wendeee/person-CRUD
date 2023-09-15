import express, { Express, Request, Response, NextFunction } from "express";
import { AppError } from "./util";
import { router as PersonRouter } from "./api/routes/person.route";
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", PersonRouter);
app.get("/", (req: Request, res: Response) => {
 res.status(200).json("Success!");
});
app.use("*", (req: Request, res: Response, next: NextFunction) => {
 const err: AppError = new AppError(`${req.originalUrl} not found!`, 404);
 next(err);
});
export default app;
