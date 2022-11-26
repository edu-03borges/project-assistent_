import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePhraseUseCase } from "./UpdatePhraseUseCase";

class UpdatePhraseController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { language, phrase: { question, answer } } = request.body;
        
        const { id } = request.params;

        const updatePhraseUseCase = container.resolve(UpdatePhraseUseCase);

        await updatePhraseUseCase.execute({ language, id, question, answer });

        return response.json();
    }
}

export { UpdatePhraseController };