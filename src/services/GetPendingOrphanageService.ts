import { PrismaClient } from "../prisma/generated/client";
import getError from "../utils/getError";





export class GetPendingOrphanageService {
    async execute() {
        const prisma = new PrismaClient();
        try {
            const orphanagesPending = await prisma.orphanage.findMany({
                where: {
                    deletedAt: null,
                    acepted: false
                },
                include: {
                    location: true
                }
            })
            return orphanagesPending;
        } catch (error) {
            getError(error);
        }
    }
}