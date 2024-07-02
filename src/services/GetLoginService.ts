import { PrismaClient } from "@prisma/client";
import { admin } from "../prisma/generated/client";




export class GetLoginService {
    async execute(login: admin) {
        const prisma = new PrismaClient();
        try {
            const validate = await prisma.admin.findUnique({
                where: {
                    email: login.email,
                    password: login.password
                }
            })
            return validate;
        } catch (error) {
            throw new Error(`usuário não encontrado: ${error}`);
        }
    }
}