export type PlantType = {
    name: string,
    id: string,
    position?: PositionType,

}

export type NewPlantType = Omit<PlantType, "id">;
type PositionType = {
    x?: string,
    y?: string,
}