import { Request, Response } from 'express'
import { UpdateOrphanageService } from '../services/UpdateOrphanageService';




export class UpdateOrphanageController {
    async handle(req: Request, res: Response) {
        const orphanage = req.body;
        const { id } = req.params;
        const service = new UpdateOrphanageService();

        const result = await service.execute(parseInt(id), orphanage);

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.status(200).json(result);
    }
}