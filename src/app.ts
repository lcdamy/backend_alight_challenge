import "reflect-metadata";
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from './swaggerConfig';
import { connectDB } from './config/dbConfig';
import expressWinston from 'express-winston';
import logger from './config/logger';
import helmet from 'helmet';
import routes from './routes';
import { auditLogger } from './middlewares/auditLogger';
import http from 'http';

const port = process.env.PORT || 3001;
const host = process.env.HOST || 'localhost';

const app = express();
const server = http.createServer(app);

const configureMiddlewares = () => {
    app.use(express.json());
    app.use(cors({ origin: '*' }));
    app.use(helmet());
    app.use(expressWinston.logger({ winstonInstance: logger, statusLevels: true }));
    app.use(auditLogger);
    app.use(express.static(path.join(__dirname, 'public')));
    app.set('trust proxy', true);
};

const configureRoutes = () => {
    app.use('/api', routes); // Main API routes
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpecs)); // Swagger docs

};

const startServer = async () => {
    try {
        require(path.join(__dirname, 'cronjobs', 'schedules'));
        await connectDB();
        configureMiddlewares();
        configureRoutes();
        server.listen(port, () => {
            console.log(`🚀 Server running at http://${host}:${port}`);
            console.log(`📘 Swagger docs available at http://${host}:${port}`);
        });
    } catch (error) {
        console.error('❌ Error starting server:', error);
    }
};

if (require.main === module) {
    startServer();
}