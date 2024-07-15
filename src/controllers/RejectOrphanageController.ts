
import { Request, Response } from "express";
import { RejectOrphanageService } from "../services/RejectOrphanageService";



export class RejectOrphanageController {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        const service = new RejectOrphanageService();

        const result = await service.execute(parseInt(id));

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.status(200).json(result);
    }
}