import { Request, Response, NextFunction } from "express";
import { UsersRepository } from "../../../../modules/Accounts/infra/typeorm/repositories/UsersRepository";
import { ServerError } from "../../../errors/ServerError";

export default async function (request: Request, response: Response, next: NextFunction) {

    const { id: user_id} = request.user;
    
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findByUserId(user_id);

    if(!user) {
        throw new ServerError("User not exists!");
    }

    if(!user.is_admin) {
        throw new ServerError("You do not have permission to perform this operation!");
    }

    next();
}
