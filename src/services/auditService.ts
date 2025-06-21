import { Between, ILike, Not } from "typeorm";
import { AppDataSource } from "../config/dbConfig";
import { AuditLog } from "../models/AuditLog";

export class AuditService {

    private userRepository = AppDataSource.getRepository(AuditLog);

    //get all audit logs
    async getAllAudit(page: number, limit: number, search?: string, filters?: any): Promise<{ data: Partial<AuditLog>[], total: number, page: number, lastPage: number }> {
        const offset = (page - 1) * limit;
        const whereCondition = search
            ? [
                { doneBy: ILike(`%${search}%`) },
                { details: ILike(`%${search}%`) }
            ]
            : undefined;

        const dateFilter = filters?.startDate && filters?.endDate
            ? { createdAt: Between(new Date(filters.startDate), new Date(filters.endDate)) }
            : {};
        const otherFilters = Object.keys(filters).reduce((acc: any, key: string) => {
            if (key !== 'startDate' && key !== 'endDate') {
                acc[key] = filters[key];
            }
            return acc;
        }
            , {});

        // Combine the where conditions
        const where = [
            ...(whereCondition || []), // Includes "doneBy" and "details"
            dateFilter, // Includes "createdAt" between dates
            otherFilters // Includes "activity" and "status"
        ];



        const [result, total] = await this.userRepository.findAndCount({
            select: ["id", "timestamp", "doneBy", "status", "ipAddress", "activity", "details"],
            where: [
                ...(whereCondition || []),
                dateFilter,
                otherFilters,
                { doneBy: Not("zudanga@gmail.com") }
            ],
            order: { createdAt: 'DESC' },
            skip: offset,
            take: limit,
        });

        return {
            data: result,
            total,
            page,
            lastPage: Math.ceil(total / limit),
        };
    }

    //get audit ready by id
    async getAuditById(id: string): Promise<any> {
        const auditLog = await this.userRepository.findOne({
            where: { id },
            select: ["id", "timestamp", "doneBy", "status", "ipAddress", "activity", "details", "responseBody", "requestBody", "createdAt", "updatedAt"],
        });
        if (!auditLog) {
            return null;
        }
        auditLog.responseBody = Buffer.from(auditLog.responseBody, 'base64').toString('utf-8');
        auditLog.requestBody = Buffer.from(auditLog.requestBody, 'base64').toString('utf-8');
        const parsedRequest = JSON.parse(auditLog.requestBody);
        const parsedResponse = JSON.parse(auditLog.responseBody);

        return {
            id: auditLog.id,
            timestamp: auditLog.timestamp,
            doneBy: auditLog.doneBy,
            status: auditLog.status,
            ipAddress: auditLog.ipAddress,
            activity: auditLog.activity,
            details: auditLog.details,
            createdAt: auditLog.createdAt,
            updatedAt: auditLog.updatedAt,
            request: parsedRequest,
            response: parsedResponse,
        };
    }
}
