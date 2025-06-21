

/**
 * @swagger
 * /api/v1/mock/overview:
 *   get:
 *     summary: Get overview data
 *     tags:
 *       - Mock
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response with overview data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /api/v1/mock/meetings:
 *   get:
 *     summary: Get meetings data
 *     tags:
 *       - Mock
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response with meetings data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /api/v1/mock/onboarding:
 *   get:
 *     summary: Get onboarding data
 *     tags:
 *       - Mock
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response with onboarding data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */


import { Router } from "express";
const { authorizationMiddleware } = require("../../middlewares/authorizationMiddleware");
const { authenticationMiddleware } = require("../../middlewares/authenticationMiddleware");
const { getOverview, getMeetings, getOnboarding } = require("../../controllers/mockController");

const mockRouter = Router();

const roles = ["admin", "hr"];

mockRouter.get('/overview', authenticationMiddleware(), authorizationMiddleware(roles, 'getOverview'), getOverview);
mockRouter.get('/meetings', authenticationMiddleware(), authorizationMiddleware(roles, 'getMeetings'), getMeetings);
mockRouter.get('/onboarding', authenticationMiddleware(), authorizationMiddleware(roles, 'getOnboarding'), getOnboarding);


export default mockRouter;
