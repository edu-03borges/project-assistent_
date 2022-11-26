import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePhraseUseCase } from "./CreatePhraseUseCase";

class CreatePhraseController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { language, phrase: { question, answer } } = request.body;

        const createPhraseUseCase = container.resolve(CreatePhraseUseCase);

        await createPhraseUseCase.execute({ language, question, answer });

        return response.json();
    }
}

export { CreatePhraseController };