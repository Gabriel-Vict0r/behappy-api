import { Request, Response } from "express";
import { CreateOrphanageService } from "../services/CreateOrphanageService";




export class CreateOrphanageController {
    async handle(req: Request, res: Response) {
        const orphanage = req.body

        const service = new CreateOrphanageService();
        const result = service.execute(orphanage);

        if (result instanceof Error) {
            return res.status(401).json(result.message)
        }
        return res.status(200).json(result);
    }
}