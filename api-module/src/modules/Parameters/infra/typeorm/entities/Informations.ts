import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("ap_informations")
class Informations {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    father: string;

    @Column()
    mother: string;

    @Column()
    live: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Informations };