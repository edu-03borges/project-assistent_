import {  
    IFindPhraseDTO, 
    IRequestLangDTO, 
    IRequestLangUpdateDTO 
} from "../dtos/ILangDTO";

import { LangEnglish } from "../infra/typeorm/entities/LangEnglish";

interface ILangEnglishRepository {
    create({ question, answer }: IRequestLangDTO): Promise<void>;
    findPhrase({ id, question, answer }:IFindPhraseDTO): Promise<LangEnglish>;
    updatePhrase({ id, question, answer }: IRequestLangUpdateDTO): Promise<void>;
}

export { ILangEnglishRepository };