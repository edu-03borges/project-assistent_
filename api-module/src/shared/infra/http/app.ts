import express  from "express";
import connectionDb from "../typeorm/";

import { Request, Response, NextFunction } from "express";
import { routes } from "./routes/index";

import "../../container";
import "reflect-metadata";
import "express-async-errors";

import { ServerError } from "../../errors/ServerError";

connectionDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

app.use(async (err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof ServerError) {
       
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return response.status(500).json({
        message: "Erro internal server:\n" + err
    })
})

export { app };