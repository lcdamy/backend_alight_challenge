import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Job } from "./Job";


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    firstname!: string;

    @Column()
    lastname!: string;

    @Column({ unique: true })
    email!: string;

    @Column({ nullable: true })
    password!: string;

    @Column({
        type: "enum",
        enum: ["hr", "admin"],
    })
    role!: string;

    @Column({ enum: ["google", "email"], default: "email" })
    registrationType!: string;

    @Column({ enum: ["active", "deactivated", "pending"], default: "pending" })
    user_status!: string;

    @Column({ nullable: true, default: "https://rci-files.lon1.digitaloceanspaces.com/rci-files/1750843685670-149071.png" })
    profilePictureURL!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @OneToMany(() => Job, job => job.user)
    jobs!: Job[];

}
