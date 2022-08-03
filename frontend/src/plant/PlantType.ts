export type PlantType = {
    name: string,
    id: string,
}

export type NewPlantType = Omit<PlantType, "id">;
