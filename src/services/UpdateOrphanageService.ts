import { orphanage, PrismaClient } from "../prisma/generated/client";
import getError from "../utils/getError";





export class UpdateOrphanageService {
    async execute(id: number, orphanage: any) {
        const prisma = new PrismaClient();

        try {
            const { id_location } = await prisma.orphanage.findUnique({
                where: {
                    id: id
                },
                select: {
                    id_location: true
                }
            });
            const getIdHour = await prisma.hours.findFirst({
                where: {
                    id_orphanage: id,
                },
                select: {
                    id: true
                }
            })
            //console.log('getters', id_location, getIdHour);
            const updatedOrphanage = await prisma.$transaction([
                prisma.orphanage.update({
                    where: {
                        id: id
                    },
                    data: {
                        name: orphanage.name,
                        about: orphanage.about,
                        instructions: orphanage.instructions,
                        acept_weekend: orphanage.acept_weekend,
                        phone: orphanage.phone,
                        acepted: orphanage.acepted
                    }
                }),
                prisma.location.update({
                    where: {
                        id: id_location
                    },
                    data: {
                        ...orphanage.location
                    }
                }),
                prisma.hours.update({
                    where: {
                        id: getIdHour.id
                    },
                    data: {
                        ...orphanage.hours
                    }
                })
            ])
            //console.log(updatedOrphanage);
            return updatedOrphanage;
        } catch (error) {
            getError(error);
        } finally {
            await prisma.$disconnect();
        }
    }
}