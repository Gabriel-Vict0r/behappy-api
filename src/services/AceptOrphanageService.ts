import { PrismaClient } from "../prisma/generated/client";
import getError from "../utils/getError";


export class AceptOrphanageService {
    async execute(id: number) {
        const prisma = new PrismaClient();

        try {
            const aceptOrph = await prisma.orphanage.update({
                where: {
                    id: id
                },
                data: {
                    acepted: true
                }
            })
            return aceptOrph;
        } catch (error) {
            getError(error);
        }
    }
}