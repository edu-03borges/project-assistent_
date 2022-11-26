import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetParametersUseCase } from "./GetParametersUseCase";

class GetParametersController {
    async handle(request: Request, response: Response): Promise<Response> {

        const getParametersUseCase = container.resolve(GetParametersUseCase);

        const parameters = await getParametersUseCase.execute();

        return response.json(parameters);
    }
}

export { GetParametersController };