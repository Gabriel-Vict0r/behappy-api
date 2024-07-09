import { PrismaClient } from "../prisma/generated/client";
import getError from "../utils/getError";



export class GetOrphanagesService {
    async execute() {
        const prisma = new PrismaClient();
        try {
            const orphanages = await prisma.orphanage.findMany({
                where: {
                    acepted: true,
                    deletedAt: null
                },
                include: {
                    location: true
                }
            })
            //console.log(orphanages);
            return orphanages;
        } catch (error) {
            getError(error);
        }

    }
}