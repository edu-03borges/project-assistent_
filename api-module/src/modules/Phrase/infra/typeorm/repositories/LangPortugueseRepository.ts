import {  
    IFindPhraseDTO, 
    IRequestLangDTO, 
    IRequestLangUpdateDTO 
} from "../../../dtos/ILangDTO";

import { getRepository, Repository } from "typeorm";
import { ILangPortugueseRepository } from "../../../repositories/ILangPortugueseRepository";
import { LangPortuguese } from "../entities/LangPortuguese";

class LangPortugueseRepository implements ILangPortugueseRepository{
    
    private repository: Repository<LangPortuguese>;
    
    constructor() {
        this.repository = getRepository(LangPortuguese);
    }

    async create({ question, answer }: IRequestLangDTO): Promise<void> {
        const phrase = this.repository.create({
            question, 
            answer
        });

        await this.repository.save(phrase);
    }

    async findPhrase({ id, question, answer }: IFindPhraseDTO): Promise<LangPortuguese> {

        if(id != undefined) 
            return await this.repository.findOne({ id });
        else if(question != undefined) 
            return await this.repository.findOne({ question });
        else if(answer != undefined) 
            return await this.repository.findOne({ answer });
    }

    async updatePhrase({ id, question, answer }: IRequestLangUpdateDTO): Promise<void> {

        const phrase = await this.findPhrase({ id, question, answer });

        if(question != undefined) phrase.question = question;
        if(answer != undefined) phrase.answer = answer;

        phrase.updated_at = new Date();

        await this.repository.save(phrase);
    }   
}

export { LangPortugueseRepository };