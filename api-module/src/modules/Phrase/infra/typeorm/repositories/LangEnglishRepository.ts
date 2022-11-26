import {  
    IFindPhraseDTO, 
    IRequestLangDTO, 
    IRequestLangUpdateDTO 
} from "../../../dtos/ILangDTO";

import { getRepository, Repository } from "typeorm";
import { ILangEnglishRepository } from "../../../repositories/ILangEnglishRepository";
import { LangEnglish } from "../entities/LangEnglish";

class LangEnglishRepository implements ILangEnglishRepository{
    
    private repository: Repository<LangEnglish>;
    
    constructor() {
        this.repository = getRepository(LangEnglish);
    }

    async create({ question, answer }: IRequestLangDTO): Promise<void> {
        const phrase = this.repository.create({
            question, 
            answer
        });

        await this.repository.save(phrase);
    }

    async findPhrase({ id, question, answer }: IFindPhraseDTO): Promise<LangEnglish> {
        
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

export { LangEnglishRepository };