import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetPhraseUseCase } from "./GetPhraseUseCase";

class GetPhraseController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { question } = request.body;

        const getPhraseUseCase = container.resolve(GetPhraseUseCase);

        const phrase = await getPhraseUseCase.execute({ question });

        return response.json({ "message": phrase.answer });
    }
}

export { GetPhraseController };