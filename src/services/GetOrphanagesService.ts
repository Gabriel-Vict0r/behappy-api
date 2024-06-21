import { PrismaClient } from "@prisma/client";



export class GetOrphanagesService {
    async execute() {
        const prisma = new PrismaClient();
        try {
            const orphanages = await prisma.orphanage.findMany({
                // where: {
                //     acepted: true
                // },
                include: {
                    location: true
                }
            })
            console.log(orphanages);
            return orphanages;
        } catch (error) {
            let message;
            error instanceof Error ? message = error.message : message = String(error);
            throw new Error(message);
        }

    }
}