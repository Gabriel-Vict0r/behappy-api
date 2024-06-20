import { Request, Response } from "express";
import { CreateOrphanageService } from "../services/CreateOrphanageService";
import dayjs from "dayjs";



export class CreateOrphanageController {
    async handle(req: Request, res: Response) {
        const orphanage = req.body
        const test = dayjs(orphanage.hours.initial_hour, 'HH:mm:ss').toISOString();
        console.log(test)
        //console.log(req.body)
        //orphanage = JSON.parse(orphanage);
        //console.log(orphanage)
        const service = new CreateOrphanageService();
        const result = await service.execute(orphanage);

        if (result instanceof Error) {
            return res.status(401).json(result.message)
        }
        return res.status(200).json(result);
    }
}