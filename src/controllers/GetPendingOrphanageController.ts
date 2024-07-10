import { Request, Response } from "express";
import { GetPendingOrphanageService } from "../services/GetPendingOrphanageService";





export class GetPendingOrphanageController {
    async handle(req: Request, res: Response) {
        const service = new GetPendingOrphanageService();

        const result = await service.execute();

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.status(200).json(result);
    }
}