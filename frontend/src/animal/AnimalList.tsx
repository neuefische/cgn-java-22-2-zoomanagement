import {Animal} from "./Animal";
import AddAnimal from "./AddAnimal";
import React from "react";
import AnimalListItem from "./AnimalListItem";

export default function AnimalList(props:
                                       {
                                           animals: Animal[],
                                           addAnimal: (animalName: string) => Promise<void>,
                                           onDeleteAnimal: (id: string) => Promise<void>,
                                           apiAnimals: string[],
                                       }) {

    return (
        <>
            <h2>Tiere</h2>
            <ul>
                {props.animals.map(animal =>
                    <AnimalListItem animal={animal} onDeleteAnimal={props.onDeleteAnimal}/>
                )}

            </ul>

            <AddAnimal addAnimal={props.addAnimal} apiAnimals={props.apiAnimals}/>
        </>
    );

}
