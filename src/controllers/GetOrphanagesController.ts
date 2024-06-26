import { NextFunction, Request, Response } from "express";
import { GetOrphanagesService } from "../services/GetOrphanagesService";


export class GetOrphanageController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const service = new GetOrphanagesService();
        const result = await service.execute();

        if (result instanceof Error) {
            return res.status(400).json({ message: result.message })
        }
        return res.json(result);
    }
}