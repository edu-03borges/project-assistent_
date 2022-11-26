import { inject, injectable } from "tsyringe";
import { IParameters } from "../../dtos/IParameters";
import { IParametersRepository } from "../../repositories/IParametersRepository";

@injectable()
class UpdateParametersUseCase {
    
    constructor(
        @inject("ParametersRepository")
        private parametersRepository: IParametersRepository
    ) {}

    async execute({ language, select_ai }: IParameters) {

        await this.parametersRepository.updateParameters({ language, select_ai });

    }
}

export { UpdateParametersUseCase };