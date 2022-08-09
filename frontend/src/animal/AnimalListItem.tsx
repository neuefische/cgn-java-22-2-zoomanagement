import React from "react";
import {Animal} from "./Animal";

export default function AnimalListItem(props:
                                           {
                                               animal: Animal,
                                               onDeleteAnimal: (id: string) => Promise<void>,
                                           }) {

    return (
        <li key={props.animal.id}>{props.animal.name}
            <button onClick={() => props.onDeleteAnimal(props.animal.id)}>Delete</button>
        </li>
    )
}