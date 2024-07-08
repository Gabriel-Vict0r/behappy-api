import { string } from "yup"
import { IAdmin } from "../types/all";
import { admin, PrismaClient } from "../prisma/generated/client";
import getError from "../utils/getError";
import bcrypt from 'bcrypt'



export class CreateAdminService {
    async execute(admin: admin) {
        const prisma = new PrismaClient();

        const verify = await prisma.admin.findUnique({
            where: {
                email: admin.email
            }
        })
        if (verify) {
            throw new Error("email já está sendo usado.");
        }

        const hashPassword = await bcrypt.hash(admin.password, 10);
        try {
            const newAdmin = await prisma.admin.create({
                data: {
                    email: admin.email,
                    password: hashPassword,
                    name: admin.name
                }
            })
            const { password, ...adminCredentials } = newAdmin;
            return adminCredentials;
        } catch (error: any) {
            getError(error);
        }
    }
}