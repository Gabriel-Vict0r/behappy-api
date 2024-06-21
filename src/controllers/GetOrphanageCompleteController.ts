import { NextFunction, Request, Response } from "express";
import { GetOrphanageCompleteService } from "../services/GetOrphanageCompleteService";




export class GetOrphanageCompleteController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        const service = new GetOrphanageCompleteService();

        const result = await service.execute(parseInt(id));
        if (result instanceof Error) {
            return res.status(400).json({ message: result.message })
        }
        return res.json(result);
    }
}