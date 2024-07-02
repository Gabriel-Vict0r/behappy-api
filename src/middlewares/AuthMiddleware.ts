import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { PrismaClient } from "../prisma/generated/client";


export class AuthMiddleware {
    async handle(req: Request, res: Response, next: NextFunction) {
        const { authorization } = req.headers

        if (!authorization) {
            return res.status(401).json({ message: 'não autorizado' })
        }

        const token = authorization.split(' ')[1]
        const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

        const prisma = new PrismaClient();

        const admin = await prisma.admin.findFirst({
            where: {
                id: id
            }
        })

        if (!admin) {
            return res.status(401).json({ message: 'não autorizado' })
        }

        const { password: _, ...adminCredentials } = admin;

        req.admin = adminCredentials;
        next();
    }
}