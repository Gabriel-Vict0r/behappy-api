import { boolean, number, object, ObjectSchema, setLocale, string } from "yup"
import { ptForm } from 'yup-locale-pt'
import yup from 'yup'
import { TOrphanage } from "../types/all"
import { NextFunction, Request, Response } from "express"

setLocale(ptForm)

const linkSchema: ObjectSchema<TOrphanage> = object({
    name: string().required().min(3),
    about: string().required().min(10),
    instructions: string().required().min(10),
    acept_weekend: boolean().required(),
    phone: string().required().min(4),
    location: object({
        latitude: number().required(),
        longitude: number().required(),
    }),
    hours: object({
        initial_hour: string().required(),
        final_hour: string().required()
    }),
})
const validateData = async (req: Request, res: Response, next: NextFunction) => {
    let { orph } = req.body
    let orphanageUpdate = req.body
    const orphanage = orph ? JSON.parse(orph) : orphanageUpdate;
    console.log(orphanage)
    try {
        console.log(orphanage)
        await linkSchema.validate(orphanage);
        return next();
    } catch (error: any) {
        return res.status(400).json({ type: error.name, field: error.path, error: error.message })
    }
}
export { validateData }