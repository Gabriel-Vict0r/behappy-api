import { NextFunction, Request, Response } from "express";




export class UploadImagesMiddleware {
    async handle(req: Request, res: Response, next: NextFunction) {

    }
}

const uploadImagesMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const files = req.files;

}