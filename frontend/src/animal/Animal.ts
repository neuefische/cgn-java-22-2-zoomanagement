import {Position} from "../shared/Position";
import {Emoji} from "./Emoji";

export type Animal = {
    id: string,
    name: string,
    position?: Position,
    emoji?: Emoji
}
