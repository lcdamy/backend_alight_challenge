import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";


@Entity()
export class Job {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ nullable: true })
    position!: string;

    @Column({ nullable: true })
    positionLeft!: number;

    @Column({ nullable: true })
    applicants!: number;

    @Column({ nullable: true })
    interviewed!: number;

    @Column({ nullable: true })
    rejected!: number;

    @Column({ nullable: true })
    feedbackPending!: number;

    @Column({ nullable: true })
    offered!: number;

    @Column({ nullable: true })
    description!: string;

    @Column("jsonb", { nullable: true })
    requirements!: string[];

    @Column("jsonb", { nullable: true })
    responsabilities!: string[];

    @Column({ nullable: true })
    applicationDeadline!: Date;

    @Column({ nullable: true })
    applicationLink!: string;

    @Column({
        type: "enum",
        enum: ["open", "closed"],
        default: "open"
    })
    status!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @ManyToOne(() => User, user => user.jobs)
    @JoinColumn()
    user!: User;

}
