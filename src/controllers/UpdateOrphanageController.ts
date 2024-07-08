import { Request, Response } from 'express'
import { UpdateOrphanageService } from '../services/UpdateOrphanageService';




export class UpdateOrphanageController {
    async handle(req: Request, res: Response) {
        const orphanage = req.body;

        const service = new UpdateOrphanageService();

        const result = service.execute(orphanage);

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.status(200).json(result);
    }
}