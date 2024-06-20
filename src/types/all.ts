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
    acept_weekend: boolean;
    hours: THour;
    location: TLocation;
}