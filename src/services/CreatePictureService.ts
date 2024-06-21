import { PrismaClient } from "@prisma/client";
import { IImage, IResultOrphanage } from "../types/all";




export class CreatePictureService {
    async execute({ id_orphanage, url }: IImage) {
        const prisma = new PrismaClient();

        try {
            const images = await prisma.picture.create({
                data: {
                    id_orphanage: id_orphanage,
                    url: url
                }
            })
            const orph = await prisma.orphanage.findUnique({
                where: {
                    id: images.id_orphanage
                },
                include: {
                    pictures: true
                }
            })
            return orph;
        } catch (error: any) {
            throw new Error(`Erro ao cadastrar imagens na base: ${error.message}`);
        }
    }
}