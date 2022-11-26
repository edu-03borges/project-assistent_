import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("ap_lang_english")
class LangEnglish {

    @PrimaryColumn()
    id?: string;

    @Column()
    question: string;

    @Column()
    answer: string;

    @Column()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export { LangEnglish };