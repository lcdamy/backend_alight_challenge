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
        const candidates = await candidateService.getAllCandidates();
        logger.info(`Retrieved ${candidates.length} candidates`);

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




