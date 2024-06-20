type TLocation = {
    latitude: number;
    longitude: number;
}
type THour = {
    initial_hour: any;
    final_hour: any;
}
type TOrphanage = {
    name: string;
    about: string;
    instructions: string;
    acept_weekend: boolean;
    hours: THour;
    location: TLocation;
}

export { TOrphanage }