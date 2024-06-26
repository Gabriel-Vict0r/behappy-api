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
    })
})
const validateData = async (req: Request, res: Response, next: NextFunction) => {
    let { orphanage } = req.body
    orphanage = JSON.parse(orphanage)
    console.log(orphanage)
    try {
        await linkSchema.validate(orphanage);
        return next();
    } catch (error: any) {
        return res.status(400).json({ type: error.name, field: error.path, error: error.message })
    }
}
export { validateData }