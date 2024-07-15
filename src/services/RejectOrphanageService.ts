import { PrismaClient } from "../prisma/generated/client";
import getError from "../utils/getError";




export class RejectOrphanageService {
    async execute(id: number) {
        const prisma = new PrismaClient();
        try {
            const rejectedOrphanage = await prisma.orphanage.update({
                where: {
                    id: id
                },
                data: {
                    acepted: false
                }
            })
            return rejectedOrphanage;
        } catch (error) {
            getError(error);
        }
    }
}