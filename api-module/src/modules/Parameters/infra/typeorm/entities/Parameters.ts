import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("ap_parameters")
class Parameters {

    @PrimaryColumn()
    id?: string;

    @Column()
    language: number;

    @Column()
    select_ai: number;

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

export { Parameters };