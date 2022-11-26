import queryRunner from "../index";
import { v4 as uuidv4 } from "uuid";
import { ParametersRepository } from "../../../../modules/Parameters/infra/typeorm/repositories/ParametersRepository";
import { ServerError } from "../../../errors/ServerError";

export default async function users(): Promise<void> {
    
    const connection = await queryRunner("localhost");

    const id = uuidv4();

    const parametersRepository = new ParametersRepository();

    const parameters = await parametersRepository.findParameters();

    if(parameters) {
        throw new ServerError("Parameters alredy exists!");
    }

    connection.query(`
    INSERT INTO ap_parameters (id, language, select_ai) VALUES ('${id}', 0,0)`);
}
