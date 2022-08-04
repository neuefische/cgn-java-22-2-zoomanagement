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
        <li key={props.animal.id}>{props.animal.name}
            <button onClick={() => props.onDeleteAnimal(props.animal.id)}>Delete</button>
            <button onClick={() => {
                navigate(`/${props.animal.id}`)
            }}>Details
            </button>
        </li>
    )
}