import { getRepository, Repository } from "typeorm";
import { IParameters } from "../../../dtos/IParameters";
import { IParametersRepository } from "../../../repositories/IParametersRepository";
import { Parameters } from "../entities/Parameters";

class ParametersRepository implements IParametersRepository {

    private repository: Repository<Parameters>;

    constructor() {
        this.repository = getRepository(Parameters);
    }

    async findParameters(): Promise<Parameters> {
        return await this.repository.findOne();
    }

    async updateParameters({ language, select_ai }: IParameters): Promise<void> {
        
        const parameters = await this.findParameters();

        if(language != undefined) parameters.language = language;
        if(select_ai != undefined) parameters.select_ai = select_ai;

        parameters.updated_at = new Date();

        await this.repository.save(parameters);
    }   
    
}

export { ParametersRepository };