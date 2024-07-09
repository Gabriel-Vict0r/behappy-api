import { PrismaClient } from "../prisma/generated/client";
import getError from "../utils/getError";






export class DisableOrphanageService {
    async execute(id: number) {
        const prisma = new PrismaClient();
        try {
            const disableOrphage = await prisma.orphanage.update({
                where: {
                    id: id
                },
                data: {
                    deletedAt: new Date(),
                    acepted: false,
                }
            })
            return disableOrphage;
        } catch (error) {
            getError(error);
        }
    }
}