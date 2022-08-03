import {Animal} from "./Animal";
import AddAnimal from "./AddAnimal";
import React from "react";

type AnimalListProps = {
    animals: Animal[],
    addAnimal: (animalName: string) => Promise<void>
}

export default function AnimalList(props: AnimalListProps) {

    return (
        <>
            <h2>Tiere</h2>
            <ul>
                {props.animals.map(animal => <li key={animal.id}>{animal.name}</li>)}
            </ul>

            <AddAnimal addAnimal={props.addAnimal}/>
        </>
    );

}
