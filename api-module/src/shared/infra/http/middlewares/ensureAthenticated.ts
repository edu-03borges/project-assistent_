import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../../../../modules/Accounts/infra/typeorm/repositories/UsersRepository";
import { ServerError } from "../../../errors/ServerError";

export default async function (request: Request, response: Response, next: NextFunction) {

    const BearerToken = request.headers.authorization;

    if(!BearerToken) {
        throw new ServerError("token Missing!");
    }

    const [, token] = BearerToken.split(" ");

    try {
        
        const { sub: user_id } = await verify(token, "ec0e2603172c73a8b644bb9456c1ff6e");

        const usersRepository = new UsersRepository();

        const user = await usersRepository.findByUserId(user_id)

        if(!user) {
            throw new ServerError("This account not exists!");
        }

        request.user = {id: user_id};

        next();
    } catch (error) {
        throw new ServerError("Token Invalid!");
    }
}
