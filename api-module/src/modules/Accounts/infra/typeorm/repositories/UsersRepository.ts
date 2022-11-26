import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { Users } from "../entities/Users";

class UsersRepository implements IUsersRepository{

    private repository: Repository<Users>;

    constructor() {
        this.repository = getRepository(Users);
    }

    async findByUserEmail(email: string): Promise<Users> {
        return await this.repository.findOne({ email });
    }

    async findByUserId(id: string): Promise<Users> {
        return await this.repository.findOne({ id });
    }


}

export { UsersRepository };