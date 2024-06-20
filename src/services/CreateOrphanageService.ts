import { PrismaClient } from "@prisma/client";
import customParseFormat from 'dayjs/plugin/customParseFormat'

import dayjs from "dayjs";

dayjs.extend(customParseFormat)
export class CreateOrphanageService {
    async execute(orphanage: TOrphanage) {
        const prisma = new PrismaClient();
        const { name, about, acept_weekend, instructions } = orphanage
        const test = dayjs(orphanage.hours.initial_hour, 'HH:mm:ss').toISOString();
        console.log(test)
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
                                initial_hour: dayjs(orphanage.hours.initial_hour, 'HH:mm:ss').toISOString(),
                                final_hour: dayjs(orphanage.hours.final_hour, 'HH:mm:ss').toISOString(),
                            }
                        }
                    },
                },
            },
            include: {
                orphanage: true,
            }
        })
        if (!newOrph) {
            throw new Error('erro ao cadastrar')
        }
        return newOrph
    }
}