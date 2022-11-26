import { inject, injectable } from "tsyringe";
import { ServerError } from "../../../../shared/errors/ServerError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

interface IRequest {
    email: string;
    password: string;
}

@injectable()
class AuthenticatedUserUseCase {

    constructor(
        @inject("UsersRepository")
        private UsersRepository: IUsersRepository) {}

    async execute({ email, password }: IRequest) {

        const user = await this.UsersRepository.findByUserEmail(email);

        if(!user) {
            throw new ServerError("User not exists!");
        }

        const passwordDecrypted = await compare(password, user.password);

        if(!passwordDecrypted) {
            throw new ServerError("Password incorrect!");
        }

        const token = sign({}, "ec0e2603172c73a8b644bb9456c1ff6e", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;

    }
}

export { AuthenticatedUserUseCase };