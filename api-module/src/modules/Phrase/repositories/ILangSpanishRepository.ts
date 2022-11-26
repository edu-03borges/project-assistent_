import {  
    IFindPhraseDTO, 
    IRequestLangDTO, 
    IRequestLangUpdateDTO 
} from "../dtos/ILangDTO";

import { LangSpanish } from "../infra/typeorm/entities/LangSpanish";

interface ILangSpanishRepository {
    create({ question, answer }: IRequestLangDTO): Promise<void>;
    findPhrase({ id, question, answer }: IFindPhraseDTO): Promise<LangSpanish>;
    updatePhrase({ id, question, answer }: IRequestLangUpdateDTO): Promise<void>;
}

export { ILangSpanishRepository };