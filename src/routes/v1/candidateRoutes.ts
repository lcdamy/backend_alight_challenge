/**
 * @swagger
 * /api/v1/candidate/create:
 *   post:
 *     summary: Create candidate profile
 *     tags: 
 *       - Candidate
 *     security:
 *       - bearerAuth: []
 *     description: Create candidate profile with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               names:
 *                 type: string
 *               gender:
 *                 type: string
 *                 enum: [male, female]
 *               email:
 *                 type: string
 *                 nullable: true
 *               phoneNumber:
 *                 type: string
 *                 nullable: true
 *               title:
 *                 type: string
 *                 nullable: true
 *               linkedinURL:
 *                 type: string
 *                 nullable: true
 *               profileURL:
 *                 type: string
 *                 nullable: true
 *               tranings:
 *                 type: string
 *                 nullable: true
 *               documentation:
 *                 type: string
 *                 nullable: true
 *               supervisor:
 *                 type: string
 *                 nullable: true
 *               project:
 *                 type: string
 *                 nullable: true
 *               educations:
 *                 type: array
 *                 items:
 *                   type: object
 *                 nullable: true
 *               experiences:
 *                 type: array
 *                 items:
 *                   type: object
 *                 nullable: true
 *           examples:
 *             example1:
 *               summary: Basic candidate profile
 *               value:
 *                 names: "Jane Doe"
 *                 gender: "female"
 *                 email: "example@gmail.com"
 *                 phoneNumber: "+1234567890"
 *                 title: "Software Engineer"
 *                 linkedinURL: "https://linkedin.com/in/janedoe"
 *                 profileURL: "https://profile.com/janedoe"
 *                 tranings: "06/10"
 *                 documentation: "06/10"
 *                 supervisor: "John Smith"
 *                 project: "AI Research"
 *                 educations:
 *                   - degree: "BSc Computer Science"
 *                     institution: "University X"
 *                     year: 2020
 *                 experiences:
 *                   - company: "TechCorp"
 *                     role: "Developer"
 *                     duration: "May 2021 - Present"
 *                     responsibilities: "Developing web applications"
 *                   - company: "TechSolutions"
 *                     role: "Developer"
 *                     duration: "Dec 2019 - Apr 2021"
 *                     responsibilities: "Building software solutions"
 * 
 * 
 *     responses:
 *       200:
 *         description: Candidate profile created or updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     names:
 *                       type: string
 *                     gender:
 *                       type: string
 *                       enum: [male, female]
 *                     phoneNumber:
 *                       type: string
 *                       nullable: true
 *                     email:
 *                       type: string
 *                       nullable: true
 *                     title:
 *                       type: string
 *                       nullable: true
 *                     linkedinURL:
 *                       type: string
 *                       nullable: true
 *                     profileURL:
 *                       type: string
 *                       nullable: true
 *                     tranings:
 *                       type: string
 *                       nullable: true
 *                     documentation:
 *                       type: string
 *                       nullable: true
 *                     supervisor:
 *                       type: string
 *                       nullable: true
 *                     project:
 *                       type: string
 *                       nullable: true
 *                     educations:
 *                       type: array
 *                       items:
 *                         type: object
 *                       nullable: true
 *                     experiences:
 *                       type: array
 *                       items:
 *                         type: object
 *                       nullable: true
 *                     id:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *             examples:
 *               success:
 *                 summary: Successful response
 *                 value:
 *                   status: "success"
 *                   message: "Candidate profile created or updated successfully"
 *                   data:
 *                     names: "Jane Doe"
 *                     gender: "female"
 *                     phoneNumber: "+1234567890"
 *                     email: "example@gmail.com"
 *                     title: "SR. Software Engineer"
 *                     linkedinURL: "https://linkedin.com/in/janedoe"
 *                     profileURL: "https://profile.com/janedoe"
 *                     tranings: "Agile Project Management"
 *                     documentation: "Passport"
 *                     supervisor: "John Smith"
 *                     project: "AI Research"
 *                     educations:
 *                       - degree: "BSc Computer Science"
 *                         institution: "University X"
 *                         year: 2020
 *                     experiences:
 *                       - company: "TechCorp"
 *                         role: "Developer"
 *                         years: 2
 *                     id: "abc123"
 *                     createdAt: "2024-06-01T12:00:00Z"
 *                     updatedAt: "2024-06-01T12:00:00Z"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 *             examples:
 *               missingField:
 *                 summary: Missing required field
 *                 value:
 *                   status: "error"
 *                   message: "Validation failed"
 *                   error: "names is required"
 */

/**
 * @swagger
 * /api/v1/candidate/detail/{id}:
 *   get:
 *     summary: Get candidate data
 *     tags: 
 *       - Candidate
 *     security:
 *       - bearerAuth: []
 *     description: Retrieve data for a specific candidate.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the candidate to retrieve data for.
 *     responses:
 *       200:
 *         description: Candidate data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     bio:
 *                       type: string
 *                     expertises:
 *                       type: array
 *                       items:
 *                         type: string
 *                     skills:
 *                       type: array
 *                       items:
 *                         type: string
 *                     phoneNumber:
 *                       type: string
 *                     linkedinURL:
 *                       type: string
 *                     profileURL:
 *                       type: string
 *                       nullable: true
 *                     educations:
 *                       type: string
 *                       nullable: true
 *                     certifications:
 *                       type: string
 *                       nullable: true
 *                     publications:
 *                       type: string
 *                       nullable: true
 *                     experiences:
 *                       type: string
 *                       nullable: true
 *                     residenceCountry:
 *                       type: string
 *                       nullable: true
 *                     residenceCity:
 *                       type: string
 *                       nullable: true
 *                     otherAttachments:
 *                       type: string
 *                       nullable: true
 *                     id:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /api/v1/candidate/update/{id}:
 *   put:
 *     summary: Update candidate profile
 *     tags: 
 *       - Candidate
 *     security:
 *       - bearerAuth: []
 *     description: Update candidate profile of a candidate by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the candidate to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               names:
 *                 type: string
 *               gender:
 *                 type: string
 *                 enum: [male, female]
 *               phoneNumber:
 *                 type: string
 *                 nullable: true
 *               linkedinURL:
 *                 type: string
 *                 nullable: true
 *               profileURL:
 *                 type: string
 *                 nullable: true
 *               tranings:
 *                 type: string
 *                 nullable: true
 *               documentation:
 *                 type: string
 *                 nullable: true
 *               supervisor:
 *                 type: string
 *                 nullable: true
 *               project:
 *                 type: string
 *                 nullable: true
 *               educations:
 *                 type: array
 *                 items:
 *                   type: object
 *                 nullable: true
 *               experiences:
 *                 type: array
 *                 items:
 *                   type: object
 *                 nullable: true
 *           examples:
 *             example1:
 *               summary: Update candidate profile
 *               value:
 *                 names: "Jane Doe"
 *                 gender: "female"
 *                 phoneNumber: "+1234567890"
 *                 linkedinURL: "https://linkedin.com/in/janedoe"
 *                 profileURL: "https://profile.com/janedoe"
 *                 tranings: "06/10"
 *                 documentation: "06/10"
 *                 supervisor: "John Smith"
 *                 project: "AI Research"
 *                 educations:
 *                   - degree: "BSc Computer Science"
 *                     institution: "University X"
 *                     year: 2020
 *                 experiences:
 *                   - company: "TechCorp"
 *                     role: "Developer"
 *                     years: 2
 *     responses:
 *       200:
 *         description: Candidate profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     names:
 *                       type: string
 *                     gender:
 *                       type: string
 *                       enum: [male, female]
 *                     phoneNumber:
 *                       type: string
 *                       nullable: true
 *                     linkedinURL:
 *                       type: string
 *                       nullable: true
 *                     profileURL:
 *                       type: string
 *                       nullable: true
 *                     tranings:
 *                       type: string
 *                       nullable: true
 *                     documentation:
 *                       type: string
 *                       nullable: true
 *                     supervisor:
 *                       type: string
 *                       nullable: true
 *                     project:
 *                       type: string
 *                       nullable: true
 *                     educations:
 *                       type: array
 *                       items:
 *                         type: object
 *                       nullable: true
 *                     experiences:
 *                       type: array
 *                       items:
 *                         type: object
 *                       nullable: true
 *                     id:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *             examples:
 *               success:
 *                 summary: Successful update response
 *                 value:
 *                   status: "success"
 *                   message: "Candidate profile updated successfully"
 *                   data:
 *                     names: "Jane Doe"
 *                     gender: "female"
 *                     phoneNumber: "+1234567890"
 *                     linkedinURL: "https://linkedin.com/in/janedoe"
 *                     profileURL: "https://profile.com/janedoe"
 *                     tranings: "Agile Project Management"
 *                     documentation: "Passport"
 *                     supervisor: "John Smith"
 *                     project: "AI Research"
 *                     educations:
 *                       - degree: "BSc Computer Science"
 *                         institution: "University X"
 *                         year: 2020
 *                     experiences:
 *                       - company: "TechCorp"
 *                         role: "Developer"
 *                         years: 2
 *                     id: "abc123"
 *                     createdAt: "2024-06-01T12:00:00Z"
 *                     updatedAt: "2024-06-01T12:00:00Z"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /api/v1/candidate/delete/{id}:
 *   delete:
 *     summary: Delete candidate profile
 *     tags: 
 *       - Candidate
 *     security:
 *       - bearerAuth: []
 *     description: Delete a candidate profile by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the candidate to delete.
 *     responses:
 *       200:
 *         description: Candidate profile deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *             examples:
 *               success:
 *                 summary: Successful delete response
 *                 value:
 *                   status: "success"
 *                   message: "Candidate profile deleted successfully"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /api/v1/candidate/list:
 *   get:
 *     summary: Get all candidates
 *     tags:
 *       - Candidate
 *     security:
 *       - bearerAuth: []
 *     description: Retrieve a list of all candidates.
 *     responses:
 *       200:
 *         description: List of candidates retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       names:
 *                         type: string
 *                       gender:
 *                         type: string
 *                         enum: [male, female]
 *                       phoneNumber:
 *                         type: string
 *                         nullable: true
 *                       linkedinURL:
 *                         type: string
 *                         nullable: true
 *                       profileURL:
 *                         type: string
 *                         nullable: true
 *                       tranings:
 *                         type: string
 *                         nullable: true
 *                       documentation:
 *                         type: string
 *                         nullable: true
 *                       supervisor:
 *                         type: string
 *                         nullable: true
 *                       project:
 *                         type: string
 *                         nullable: true
 *                       educations:
 *                         type: array
 *                         items:
 *                           type: object
 *                         nullable: true
 *                       experiences:
 *                         type: array
 *                         items:
 *                           type: object
 *                         nullable: true
 *                       createdAt:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 *             examples:
 *               success:
 *                 summary: Successful response
 *                 value:
 *                   status: "success"
 *                   message: "List of candidates retrieved successfully"
 *                   data:
 *                     - id: "abc123"
 *                       names: "Jane Doe"
 *                       gender: "female"
 *                       phoneNumber: "+1234567890"
 *                       linkedinURL: "https://linkedin.com/in/janedoe"
 *                       profileURL: "https://profile.com/janedoe"
 *                       tranings: "Agile Project Management"
 *                       documentation: "Passport"
 *                       supervisor: "John Smith"
 *                       project: "AI Research"
 *                       educations:
 *                         - degree: "BSc Computer Science"
 *                           institution: "University X"
 *                           year: 2020
 *                       experiences:
 *                         - company: "TechCorp"
 *                           role: "Developer"
 *                           years: 2
 *                       createdAt: "2024-06-01T12:00:00Z"
 *                       updatedAt: "2024-06-01T12:00:00Z"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */



import { Router } from "express";
const {
    createCandidate,
    getCandidateById,
    updateCandidate,
    deleteCandidate,
    getAllCandidates

} = require("../../controllers/candidateController");
const { authenticationMiddleware } = require("../../middlewares/authenticationMiddleware");
const { authorizationMiddleware } = require("../../middlewares/authorizationMiddleware");

const candidateRouter = Router();
const roles = ["admin", "hr"];

candidateRouter.post('/create', authenticationMiddleware(), authorizationMiddleware(roles, 'createCandidate'), createCandidate);
candidateRouter.get('/detail/:id', authenticationMiddleware(), authorizationMiddleware(roles, 'getCandidateById'), getCandidateById);
candidateRouter.put('/update/:id', authenticationMiddleware(), authorizationMiddleware(roles, 'updateCandidate'), updateCandidate);
candidateRouter.delete('/delete/:id', authenticationMiddleware(), authorizationMiddleware(roles, 'deleteCandidate'), deleteCandidate);
candidateRouter.get('/list', authenticationMiddleware(), authorizationMiddleware(roles, 'getAllCandidates'), getAllCandidates);


export default candidateRouter;
