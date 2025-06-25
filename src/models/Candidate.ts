import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";


@Entity()
export class Candidate {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ nullable: true })
    names!: string;

    @Column({ enum: ["male", "female"], nullable: true })
    gender!: string;

    @Column({ nullable: true })
    email!: string;

    @Column({ nullable: true })
    phoneNumber!: string;

    @Column({ nullable: true })
    title!: string;

    @Column({ nullable: true })
    linkedinURL!: string;

    @Column({ nullable: true })
    profileURL!: string;

    @Column({ nullable: true })
    tranings!: string;

    @Column({ nullable: true })
    documentation!: string;

    @Column({ nullable: true })
    supervisor!: string;

    @Column({ nullable: true })
    supervisorProfile!: string;

    @Column({ nullable: true })
    project!: string;

    @Column("simple-json", { nullable: true })
    educations!: object[];

    @Column("simple-json", { nullable: true })
    experiences!: object[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

}
