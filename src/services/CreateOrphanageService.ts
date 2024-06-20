import { PrismaClient } from "@prisma/client";



export class CreateOrphanageService {
    async execute(orphanage: TOrphanage) {
        const prisma = new PrismaClient();
        const { name, about, acept_weekend, instructions } = orphanage
        const newOrph = await prisma.location.create({
            data: {
                ...orphanage.location,
                orphanage: {
                    create: {
                        name: name,
                        about: about,
                        instructions: instructions,
                        acept_weekend: acept_weekend,
                        hours: {
                            create: {
                                ...orphanage.hours
                            }
                        }
                    },
                },
            },
            include: {
                orphanage: true,
            }
        })
        return newOrph;
    }
}