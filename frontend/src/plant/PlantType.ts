export type PlantType = {
    name: string,
    id: string,
    position?: PositionType,

}
 export type PositionType = {
    x: string,
    y: string,
}

export type NewPlantType = Omit<PlantType, "id">;
