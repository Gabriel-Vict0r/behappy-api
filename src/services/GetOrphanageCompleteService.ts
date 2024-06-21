import { orphanage, PrismaClient } from "@prisma/client";





export class GetOrphanageCompleteService {
    async execute(id: number) {
        const prisma = new PrismaClient();

        try {
            const orphanage = await prisma.orphanage.findUnique({
                where: {
                    id: id
                },
                include: {
                    hours: true,
                    location: true,
                    pictures: true
                }
            })
            return orphanage;
        } catch (error) {
            let message;
            error instanceof Error ? message = error.message : message = String(error);
            throw new Error(message);
        }
    }
}