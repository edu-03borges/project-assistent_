import { IParameters } from "../dtos/IParameters";
import { Parameters } from "../infra/typeorm/entities/Parameters";

interface IParametersRepository {
    findParameters(): Promise<Parameters>;
    updateParameters({ language, select_ai }: IParameters): Promise<void>;
}

export { IParametersRepository };