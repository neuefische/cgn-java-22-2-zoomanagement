export type Plant = {
    name: string,
    id: string,
}

export type PlantType = Omit<Plant, "id">;
