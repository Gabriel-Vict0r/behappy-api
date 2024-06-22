import { admin } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import * as yup from 'yup';
// import { object, ObjectSchema, string } from "yup";
import YupPassword from 'yup-password'
import { IAdmin } from "../types/all";


YupPassword(yup)
const linkSchema: yup.ObjectSchema<IAdmin> = yup.object({
    name: yup.string().required().min(3),
    email: yup.string().email().required(),
    password: yup.string().required().min(8).minLowercase(1, 'a senha precisa ter pelo menos uma letra minúscula').minUppercase(1, 'a senha precisa ter pelo menos uma letra maiúscula').minSymbols(1, 'A senha precisa ter pelo menos um caractere especial')

})
const validateAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const admin = req.body
    try {
        await linkSchema.validate(admin);
        return next();
    } catch (error: any) {
        return res.status(400).json({ field: error.path, message: error.message })
    }
}

export { validateAdmin }