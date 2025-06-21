import express from 'express';
import authRoutes from './authRoutes';
import candidateRoutes from './candidateRoutes';
import jobRoutes from './jobRoutes';
import auditRouter from './auditRoutes';
import mockRouter from './mockRoutes';


const router = express.Router();

router.use('/auth', authRoutes);
router.use('/candidate', candidateRoutes);
router.use('/job', jobRoutes);
router.use('/audits', auditRouter);
router.use('/mock', mockRouter);


export default router;