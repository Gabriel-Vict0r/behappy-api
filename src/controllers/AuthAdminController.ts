import { Request, Response } from "express";
import { PrismaClient } from "../prisma/generated/client";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export class AuthAdminController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body
        const prisma = new PrismaClient();

        const findAdmin = await prisma.admin.findUnique({
            where: {
                email: email
            }
        })

        if (!findAdmin) {
            return res.status(401).json({ message: 'O email informado é inválido', field: 'email' })
        }

        const verifyPass = await bcrypt.compare(password, findAdmin.password)

        if (!verifyPass) {
            return res.status(401).json({ message: 'A senha informada é inválida', field: 'password' })
        }

        const token = jwt.sign({ id: findAdmin.id }, process.env.JWT_PASS!, {
            expiresIn: '8h'
        })

        const { password: _, ...adminLogin } = findAdmin;

        return res.status(200).json({
            user: adminLogin,
            token: token
        })
    }
}