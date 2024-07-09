import { Request, Response } from "express";
import { DisableOrphanageService } from "../services/DisableOrphanageService";




export class DisableOrphanageController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DisableOrphanageService();

        const result = await service.execute(parseInt(id));

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.status(200).json(result);
    }
}