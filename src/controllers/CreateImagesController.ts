import { orphanage, picture } from "../prisma/generated/client";
import { Request, Response } from "express";
import { CreatePictureService } from "../services/CreatePictureService";
import { IResultOrphanage } from "../types/all";



type IArrayOfImages = picture[]

export class CreateImagesController {
    async handle(req: Request, res: Response) {
        const id = req.resultId;
        const filesReq = req.files!;
        const files = filesReq as Express.Multer.File[];
        let arrayOfImages: Array<any> = [];

        for (let index = 0; index < files.length; index++) {
            const atualFile = files[index];
            let urlImage = `https://behappybucket.s3.amazonaws.com/${atualFile.filename}`

            const service = new CreatePictureService();
            const objImage = {
                id_orphanage: id!,
                url: urlImage
            }
            const result = await service.execute(objImage);
            if (result instanceof Error) {
                return res.status(400).json({ message: result.message })
            }
            arrayOfImages.push(result);
        }
        return res.status(201).json(arrayOfImages!.map((element) => element));
    }
}