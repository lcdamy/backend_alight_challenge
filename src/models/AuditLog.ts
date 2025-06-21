import { CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class AuditLog {
    static deleteMany(arg0: { createdAt: { $lt: Date; }; }) {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    timestamp!: Date;

    @Column()
    method!: string;

    @Column()
    url!: string;

    @Column()
    statusCode!: number;

    @Column({ nullable: true })
    duration!: string;

    @Column()
    userAgent!: string;

    @Column({ nullable: true })
    doneBy!: string;

    @Column({ nullable: true })
    ipAddress!: string;

    @Column({ nullable: true })
    activity!: string;

    @Column({ nullable: true })
    details!: string;

    @Column({ nullable: true })
    status!: string;

    @Column({ nullable: true })
    responseBody!: string;

    @Column({ nullable: true })
    requestBody!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
