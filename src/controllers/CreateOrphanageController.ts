import { NextFunction, Request, Response } from "express";
import { CreateOrphanageService } from "../services/CreateOrphanageService";
import dayjs from "dayjs";



export class CreateOrphanageController {
    async handle(req: Request, res: Response, next: NextFunction) {
        let { orphanage } = req.body
        orphanage = JSON.parse(orphanage)
        //console.log(req.body)
        //orphanage = JSON.parse(orphanage);
        //console.log(orphanage)
        const service = new CreateOrphanageService();
        const result = await service.execute(orphanage);

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        req.resultId = result.orphanage[0].id;
        next();
        //return res.status(201).json(result);
    }
}