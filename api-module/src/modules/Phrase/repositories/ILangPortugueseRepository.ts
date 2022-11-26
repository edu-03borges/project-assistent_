import {  
    IFindPhraseDTO, 
    IRequestLangDTO, 
    IRequestLangUpdateDTO 
} from "../dtos/ILangDTO";

import { LangPortuguese } from "../infra/typeorm/entities/LangPortuguese";

interface ILangPortugueseRepository {
    create({ question, answer }: IRequestLangDTO): Promise<void>;
    findPhrase({ id, question, answer }:IFindPhraseDTO): Promise<LangPortuguese>;
    updatePhrase({ id, question, answer }: IRequestLangUpdateDTO): Promise<void>;
}

export { ILangPortugueseRepository };