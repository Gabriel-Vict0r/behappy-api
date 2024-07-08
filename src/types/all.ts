import { orphanage, picture } from "@prisma/client";

type TLocation = {
    latitude: number;
    longitude: number;
}
type THour = {
    initial_hour: string;
    final_hour: string;
}
type TOrphanage = {
    name: string;
    about: string;
    instructions: string;
    phone: string;
    acept_weekend: boolean;
    hours: THour;
    location: TLocation;
}

interface IImage {
    id_orphanage: number;
    url: string;
}

interface IAdmin {
    name: string;
    email: string;
    password: string | undefined;
}

type TErrorMessage = Error | string;
type IResultOrphanage = picture[] & orphanage | null
export { TOrphanage, IImage, IResultOrphanage, IAdmin, TErrorMessage }