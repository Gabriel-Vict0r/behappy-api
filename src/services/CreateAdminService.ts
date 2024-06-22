import { string } from "yup"
import { IAdmin } from "../types/all";
import { admin, PrismaClient } from "../prisma/generated/client";
import getError from "../utils/getError";




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

        try {
            const newAdmin = await prisma.admin.create({
                data: admin
            })
            return newAdmin;
        } catch (error: any) {
            getError(error);
        }
    }
}