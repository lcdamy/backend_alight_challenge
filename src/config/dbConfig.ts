import { DataSource } from "typeorm";
import { User } from "../models/User";
import { Candidate } from "../models/Candidate";
import { Job } from "../models/Job";
import { AuditLog } from "../models/AuditLog";

import dotenv from 'dotenv';


dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432", 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        User,
        Candidate,
        Job,
        AuditLog,
    ],
    synchronize: true,
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
    extra: {
        ssl: {
            rejectUnauthorized: false, // Accept self-signed certs (for dev only)
        },
    },

});

export const connectDB = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to the database", error);
        throw error;
    }
};
