import { orphanage, PrismaClient } from "../prisma/generated/client";





export class UpdateOrphanageService {
    async execute(orphanage: any) {
        const prisma = new PrismaClient();

        try {
            const updatedOrph = await prisma.orphanage.update({
                where: {
                    id: orphanage.id
                },
                data: {
                    ...orphanage,
                    location: {
                        update: {
                            latitude: orphanage.location.latitude,
                            longitude: orphanage.location.longitude
                        }
                    },
                    hours: {
                        update: {
                            initial_hour: orphanage.hours.initial_hour,
                            final_hour: orphanage.hours.final_hour
                        }
                    }
                },
                include: {
                    location: true,
                    hours: true
                }
            })
            return updatedOrph;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}