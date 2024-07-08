import { NextFunction, Request, Response } from "express";
import { object, ObjectSchema, string } from "yup";


interface ILogin {
    email: string;
    password: string;
}


const linkSchema: ObjectSchema<ILogin> = object({
    email: string().required().email(),
    password: string().required().min(5)
})

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
    const login = req.body;
    try {
        const result = await linkSchema.validate(login);
        if (result) {
            return next();
        }
    } catch (error: any) {
        return res.status(401).json({ error: error.message, field: error.path })
    }
}

export default validateLogin;