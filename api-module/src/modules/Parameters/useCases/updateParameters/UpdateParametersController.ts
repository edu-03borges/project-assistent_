import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateParametersUseCase } from "./UpdateParametersUseCase";

class UpdateParametersController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { language, select_ai } = request.body;

        const updateParametersUseCase = container.resolve(UpdateParametersUseCase);

        updateParametersUseCase.execute({ language, select_ai });

        return response.json();
    }
}

export { UpdateParametersController };