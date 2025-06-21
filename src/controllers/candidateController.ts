import { Request, Response } from 'express';
import { CandidateService } from '../services/candidateService';
import { StatusCodes } from "http-status-codes";
import { formatResponse } from "../utils/helper";
import { CandidateCreateDTO } from '../dtos/candidateDTO';
import { candidateValidationSchema } from '../utils/validate';
import logger from '../config/logger';

const candidateService = new CandidateService();

//create candidate
export const createCandidate = async (req: Request, res: Response): Promise<Response> => {
    try {
        logger.info('Received request to create candidate');
        const candidateData: CandidateCreateDTO = req.body;

        const { error } = candidateValidationSchema.validate(candidateData);
        if (error) {
            logger.error(`Validation error: ${error.details[0].message}`);
            return res.status(StatusCodes.BAD_REQUEST).json(formatResponse('error', error.details[0].message));
        }

        const userId = (req.user as { id: string }).id;

        if (!userId) {
            logger.error('User ID not found in request');
            return res.status(StatusCodes.UNAUTHORIZED).json(formatResponse('error', 'User not authenticated'));
        }

        //check if the candidate already exists on email
        logger.info(`Checking if candidate with email ${candidateData.email} already exists`);
        const existingCandidate = await candidateService.getCandidateByEmail(candidateData.email);
        if (existingCandidate) {
            logger.warn(`Candidate with email ${candidateData.email} already exists`);
            return res.status(StatusCodes.CONFLICT).json(formatResponse("error", "Candidate with this email already exists"));
        }

        //check if the candidate already exists on phone number
        if (candidateData.phoneNumber) {
            logger.info(`Checking if candidate with phone number ${candidateData.phoneNumber} already exists`);
            const existingCandidateByPhone = await candidateService.getCandidateByPhone(candidateData.phoneNumber);
            if (existingCandidateByPhone) {
                logger.warn(`Candidate with phone number ${candidateData.phoneNumber} already exists`);
                return res.status(StatusCodes.CONFLICT).json(formatResponse("error", "Candidate with this phone number already exists"));
            }
        }

        //check if the candidate already exists on linkedin URL
        if (candidateData.linkedinURL) {
            logger.info(`Checking if candidate with LinkedIn URL ${candidateData.linkedinURL} already exists`);
            const existingCandidateByLinkedIn = await candidateService.getCandidateByLinkedin(candidateData.linkedinURL);
            if (existingCandidateByLinkedIn) {
                logger.warn(`Candidate with LinkedIn URL ${candidateData.linkedinURL} already exists`);
                return res.status(StatusCodes.CONFLICT).json(formatResponse("error", "Candidate with this LinkedIn URL already exists"));
            }
        }


        const newCandidate = await candidateService.createCandidate(candidateData);
        logger.info(`Candidate created with ID: ${newCandidate.id}`);
        // Optionally, you can send an email notification here if needed

        return res.status(StatusCodes.CREATED).json(formatResponse("success", "Candidate created successfully", newCandidate));
    } catch (error) {
        logger.error(`Error creating candidate: ${(error as Error).message}`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(formatResponse("error", (error as Error).message));
    }
}

export const getAllCandidates = async (req: Request, res: Response): Promise<Response> => {
    try {
        logger.info('Received request to get all candidates');

        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const candidates = await candidateService.getAllCandidates(page, limit);
        logger.info(`Retrieved candidates`);

        return res.status(StatusCodes.OK).json(formatResponse("success", "Candidates retrieved successfully", candidates));
    } catch (error) {
        logger.error(`Error retrieving candidates: ${(error as Error).message}`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(formatResponse("error", (error as Error).message));
    }
}

export const getCandidateById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const candidateId = req.params.id;
        logger.info(`Received request to get candidate with ID: ${candidateId}`);



        const candidate = await candidateService.getCandidateById(candidateId);
        if (!candidate) {
            logger.warn(`Candidate with ID ${candidateId} not found`);
            return res.status(StatusCodes.NOT_FOUND).json(formatResponse("error", "Candidate not found"));
        }

        return res.status(StatusCodes.OK).json(formatResponse("success", "Candidate retrieved successfully", candidate));
    } catch (error) {
        logger.error(`Error retrieving candidate: ${(error as Error).message}`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(formatResponse("error", (error as Error).message));
    }
}

export const updateCandidate = async (req: Request, res: Response): Promise<Response> => {
    try {
        const candidateId = req.params.id;
        const candidateData: CandidateCreateDTO = req.body;

        const { error } = candidateValidationSchema.validate(candidateData);
        if (error) {
            logger.error(`Validation error: ${error.details[0].message}`);
            return res.status(StatusCodes.BAD_REQUEST).json(formatResponse('error', error.details[0].message));
        }

        const updatedCandidate = await candidateService.updateCandidate(candidateId, candidateData);
        logger.info(`Candidate with ID ${candidateId} updated successfully`);

        return res.status(StatusCodes.OK).json(formatResponse("success", "Candidate updated successfully", updatedCandidate));
    } catch (error) {
        logger.error(`Error updating candidate: ${(error as Error).message}`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(formatResponse("error", (error as Error).message));
    }
}

export const deleteCandidate = async (req: Request, res: Response): Promise<Response> => {
    try {
        const candidateId = req.params.id;
        logger.info(`Received request to delete candidate with ID: ${candidateId}`);

        const deletedCandidate = await candidateService.deleteCandidate(candidateId);
        if (!deletedCandidate) {
            logger.warn(`Candidate with ID ${candidateId} not found`);
            return res.status(StatusCodes.NOT_FOUND).json(formatResponse("error", "Candidate not found"));
        }

        logger.info(`Candidate with ID ${candidateId} deleted successfully`);
        return res.status(StatusCodes.OK).json(formatResponse("success", "Candidate deleted successfully", deletedCandidate));
    } catch (error) {
        logger.error(`Error deleting candidate: ${(error as Error).message}`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(formatResponse("error", (error as Error).message));
    }
}




