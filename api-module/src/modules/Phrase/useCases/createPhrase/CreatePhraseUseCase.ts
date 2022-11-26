import { inject, injectable } from "tsyringe";
import { ILangEnglishRepository } from "../../repositories/ILangEnglishRepository";
import { ILangSpanishRepository } from "../../repositories/ILangSpanishRepository";
import { ILangPortugueseRepository } from "../../repositories/ILangPortugueseRepository";
import languages from "../../../../config/languages/languages";
import { ServerError } from "../../../../shared/errors/ServerError";

interface IRequest {
    language: number;
    question: string;
    answer: string;
}

@injectable()
class CreatePhraseUseCase {

    private langPhrase: any;

    constructor(
        @inject("LangEnglishRepository")
        private langEnglishRepository: ILangEnglishRepository,
        @inject("LangSpanishRepository")
        private langSpanishRepository: ILangSpanishRepository,
        @inject("LangPortugueseRepository")
        private langPortugueseRepository: ILangPortugueseRepository
    ) {}

    async execute({ language, question, answer }: IRequest): Promise<void> {

        if(question!=undefined) question = question.toLowerCase();
        if(answer!=undefined) answer = answer.toLowerCase();

        switch(Number(language)) {
            case languages.portuguese:
                this.langPhrase = this.langPortugueseRepository;
                break;
            case languages.english:
                this.langPhrase = this.langEnglishRepository;
                break;
            case languages.spanish:
                this.langPhrase = this.langSpanishRepository;
                break;
            default:
                throw new ServerError("Value Invalid!");
        }

        const phraseAlredyExists = await this.langPhrase.findPhrase({ question });

        if(phraseAlredyExists) {
            throw new ServerError("This phrase alredy exists!");
        }

        await this.langPhrase.create({ question, answer });
    }
}

export { CreatePhraseUseCase };