import { Request, Response } from "express";
import { AceptOrphanageService } from "../services/AceptOrphanageService";


export class AceptOrphanageController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new AceptOrphanageService();

        const result = await service.execute(parseInt(id));

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.status(200).json(result);
    }
}