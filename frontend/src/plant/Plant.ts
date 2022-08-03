export type Plant = {
    name: string,
    id: string,
}

export type NewPlantType = Omit<Plant, "id">;
