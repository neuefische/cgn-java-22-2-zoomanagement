import {Animal} from "./Animal";

export type NewAnimal = Omit<Animal, "id">

