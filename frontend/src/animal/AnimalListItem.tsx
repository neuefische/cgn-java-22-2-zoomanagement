import React from "react";
import {Animal} from "./Animal";
import {useNavigate} from "react-router-dom";

export default function AnimalListItem(props:
                                           {
                                               animal: Animal,
                                               onDeleteAnimal: (id: string) => Promise<void>,
                                           }) {

    const navigate = useNavigate();

    return (
         <li key={props.animal.id}>
            <div className={"nameStyle"}> {props.animal.name} </div>
            <button onClick={() => props.onDeleteAnimal(props.animal.id)}><img src={"../pictures/trash.png"} alt={"Delete"}/></button>
            <button onClick={() => {
                navigate(`/animals/${props.animal.id}`)
            }}>Details
            </button>
        </li>
    )
}
