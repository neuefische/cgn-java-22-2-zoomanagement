import {Animal} from "./Animal";
import AddAnimal from "./AddAnimal";
import React from "react";

export default function AnimalList(props: { animals: Animal[], onAddAnimal: (animalName: string) => void; }) {

    return (
        <>
            <h2>Tiere</h2>
            <ul>
                {props.animals.map(animal => <li key={animal.id}>{animal.name}</li>)}
            </ul>

            <AddAnimal onAddAnimal={props.onAddAnimal}/>
        </>
    );

}
