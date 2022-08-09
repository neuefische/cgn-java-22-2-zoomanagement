import React from "react";
import {Animal} from "./Animal";

export default function AnimalListItem(props:
                                           {
                                               animal: Animal,
                                               onDeleteAnimal: (id: string) => Promise<void>,
                                           }) {

    return (
         <li key={props.animal.id}>
            <div className={"nameStyle"}> {props.animal.name} </div>
            <button onClick={() => props.onDeleteAnimal(props.animal.id)}><img src={"../pictures/trash.png"} alt={"Delete"}/></button>
        </li>
    )
}