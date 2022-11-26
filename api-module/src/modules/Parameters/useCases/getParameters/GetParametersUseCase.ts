import { inject, injectable } from "tsyringe";
import { IParametersRepository } from "../../../Parameters/repositories/IParametersRepository";


@injectable()
class GetParametersUseCase {
    constructor(
        @inject("ParametersRepository")
        private parametersRepository: IParametersRepository
    ) {}

    async execute() {    

        return await this.parametersRepository.findParameters();
    }
}

export { GetParametersUseCase };