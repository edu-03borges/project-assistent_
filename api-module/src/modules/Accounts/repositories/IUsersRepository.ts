import { Users } from "../infra/typeorm/entities/Users";

interface IUsersRepository {
    findByUserEmail(email: string): Promise<Users>;
    findByUserId(id: string): Promise<Users>;
}

export { IUsersRepository };