import { AppDataSource } from "../config/dbConfig";
import { Candidate } from '../models/Candidate';
import { CandidateCreateDTO } from '../dtos/candidateDTO';
import { sendEmail } from "../utils/emailService";





export class CandidateService {
    private frontend_host = process.env.FRONTEND_URL ? process.env.FRONTEND_URL : 'http://localhost:3000';
    private candidateRepository = AppDataSource.getRepository(Candidate);



    //create expert profile
    async createCandidate(Candidate: CandidateCreateDTO): Promise<Candidate> {
        const newCandidate = this.candidateRepository.create(Candidate);
        await this.candidateRepository.save(newCandidate);
        return newCandidate;
    }

    async getAllCandidates(): Promise<Candidate[]> {
        return await this.candidateRepository.find({
            order: { createdAt: 'DESC' }
        });
    }

    async getCandidateById(candidateId: string): Promise<Candidate | null> {
        const candidate = await this.candidateRepository.findOne({
            where: { id: candidateId }
        });
        if (!candidate) {
            throw new Error('Candidate not found');
        }
        return candidate;
    }

    async updateCandidate(candidateId: string, candidateData: CandidateCreateDTO): Promise<Candidate> {
        const candidate = await this.candidateRepository.findOneBy({ id: candidateId });
        if (!candidate) {
            throw new Error('Candidate not found');
        }
        Object.assign(candidate, candidateData);
        await this.candidateRepository.save(candidate);
        return candidate;
    }

    async deleteCandidate(candidateId: string): Promise<boolean> {
        const candidate = await this.candidateRepository.findOneBy({ id: candidateId });
        if (!candidate) {
            throw new Error('Candidate not found');
        }
        const deleted = await this.candidateRepository.remove(candidate);
        return !!deleted; // Return true if deletion was successful
    }



}
