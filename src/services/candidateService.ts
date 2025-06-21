import { AppDataSource } from "../config/dbConfig";
import { Candidate } from '../models/Candidate';
import { CandidateCreateDTO } from '../dtos/candidateDTO';



export class CandidateService {
    private candidateRepository = AppDataSource.getRepository(Candidate);

    //create expert profile
    async createCandidate(Candidate: CandidateCreateDTO): Promise<Candidate> {
        const newCandidate = this.candidateRepository.create(Candidate);
        await this.candidateRepository.save(newCandidate);
        return newCandidate;
    }

    async getCandidateByEmail(email: string): Promise<Candidate | null> {
        return await this.candidateRepository.findOne({
            where: { email },
        });
    }

    async getCandidateByPhone(phoneNumber: string): Promise<Candidate | null> {
        return await this.candidateRepository.findOne({
            where: { phoneNumber },
        });
    }

    async getCandidateByLinkedin(linkedinURL: string): Promise<Candidate | null> {
        return await this.candidateRepository.findOne({
            where: { linkedinURL },
        });
    }

    async getAllCandidates(page: number, limit: number): Promise<{ data: Candidate[]; total: number; page: number; lastPage: number }> {
        const skip = (page - 1) * limit;
        const [result, total] = await this.candidateRepository.findAndCount({
            order: { createdAt: 'DESC' },
            skip,
            take: limit,
        });
        return {
            data: result,
            total,
            page,
            lastPage: Math.ceil(total / limit)
        };
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
