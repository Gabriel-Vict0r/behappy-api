import { NextFunction, Request, Response } from "express";
import { UploadImageService } from "../services/CreateImageService";




export class UploadImagesMiddleware {
    async handle(req: Request, res: Response, next: NextFunction) {

    }
}

const uploadImagesMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const files = req.files;

    const filesArr = files as Express.Multer.File[]

    const length = files?.length as number;

    const uploaodImageService = new UploadImageService();

    try {

        for (let index = 0; index < length; index++) {
            let file = filesArr[index];
            await uploaodImageService.execute(file)
        }
        next();
    } catch (error: any) {
        return res.status(400).json({ message: error.message })
    }
}