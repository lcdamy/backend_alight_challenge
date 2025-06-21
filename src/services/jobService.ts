import { AppDataSource } from "../config/dbConfig";
import { JobDTO } from '../dtos/jobDTO';
import { Job } from "../models/Job";
import { User } from "../models/User";
import { sendEmail } from "../utils/emailService";

export class JobService {
    private frontend_host = process.env.FRONTEND_URL ? process.env.FRONTEND_URL : 'http://localhost:3000';
    private JobRepository = AppDataSource.getRepository(Job);
    private userRepository = AppDataSource.getRepository(User);



    async createJob(jobData: JobDTO, userId: string): Promise<Job> {
        const user = await this.userRepository.findOneBy({ id: userId });
        if (!user) {
            throw new Error('User not found');
        }

        const newJob = this.JobRepository.create({
            ...jobData,
            user: user
        });

        await this.JobRepository.save(newJob);

        const context = {
            year: new Date().getFullYear(),
            logo_url: process.env.LOGO_URL,
            subject: 'Job Created Successfully',
            name: user.firstname,
            message: `Your job titled "${newJob.position}" has been successfully created.`,
            link: `${this.frontend_host}/auth/login`,
            link_label: 'Log in to your account'
        };
        sendEmail('admin_client_expert_email_template', 'Job creation', user.email, context);

        return newJob;
    }

    async getAllJobs(): Promise<Job[]> {
        return await this.JobRepository.find({
            relations: ['user'],
            order: { createdAt: 'DESC' }
        });
    }

    async getJobById(jobId: string): Promise<Job | null> {
        const job = await this.JobRepository.findOne({
            where: { id: jobId },
            relations: ['user']
        });
        if (!job) {
            throw new Error('Job not found');
        }
        return job;
    }

    async updateJob(jobId: string, jobData: JobDTO): Promise<Job> {
        const job = await this.JobRepository.findOneBy({ id: jobId });
        if (!job) {
            throw new Error('Job not found');
        }

        Object.assign(job, jobData);
        await this.JobRepository.save(job);

        return job;
    }

    async deleteJob(jobId: string): Promise<boolean> {
        const job = await this.JobRepository.findOneBy({ id: jobId });
        if (!job) {
            throw new Error('Job not found');
        }

        const deleted = await this.JobRepository.remove(job);
        return !!deleted;
    }

}