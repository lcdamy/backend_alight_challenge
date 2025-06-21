

import { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";
import { formatResponse } from "../utils/helper";
import logger from '../config/logger';
const fs = require('fs');
const path = require('path');
const overview_file = path.resolve(process.cwd(), 'src/assets', 'overview_mock_data.json');
const meetings_file = path.resolve(process.cwd(), 'src/assets', 'meetings_mock_data.json');
const onboarding_file = path.resolve(process.cwd(), 'src/assets', 'onboarding_mock_data.json');

const overview_data = JSON.parse(fs.readFileSync(overview_file, 'utf-8'));
const meetings_data = JSON.parse(fs.readFileSync(meetings_file, 'utf-8'));
const onboarding_data = JSON.parse(fs.readFileSync(onboarding_file, 'utf-8'));



export const getOverview = async (req: Request, res: Response) => {
    try {
        logger.info('Received request to get overview data');
        return res.status(StatusCodes.OK).json(formatResponse("success", "Overview data retrieved successfully", overview_data));
    } catch (error) {
        logger.error(`Error retrieving overview data: ${(error as Error).message}`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(formatResponse("error", (error as Error).message));
    }
};
export const getMeetings = async (req: Request, res: Response) => {
    try {
        logger.info('Received request to get meetings data');
        return res.status(StatusCodes.OK).json(formatResponse("success", "Meetings data retrieved successfully", meetings_data));
    } catch (error) {
        logger.error(`Error retrieving meetings data: ${(error as Error).message}`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(formatResponse("error", (error as Error).message));
    }
}
export const getOnboarding = async (req: Request, res: Response) => {
    try {
        logger.info('Received request to get onboarding data');
        return res.status(StatusCodes.OK).json(formatResponse("success", "Onboarding data retrieved successfully", onboarding_data));
    } catch (error) {
        logger.error(`Error retrieving onboarding data: ${(error as Error).message}`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(formatResponse("error", (error as Error).message));
    }
};




