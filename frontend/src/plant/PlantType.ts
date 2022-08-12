import {Position} from "../shared/Position";

export type PlantType = {
    name: string,
    id: string,
    position?: Position,

}

export type NewPlantType = Omit<PlantType, "id">;
