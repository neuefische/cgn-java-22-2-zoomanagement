import {Animal} from "./Animal";
import AddAnimal from "./AddAnimal";
import React, {useState} from "react";
import AnimalListItem from "./AnimalListItem";
import GeneralSearch from "../shared/GeneralSearch";
import {filterGeneral} from "../shared/helpers";

export default function AnimalList(props:
                                       {
                                           animals: Animal[],
                                           addAnimal: (animalName: string) => Promise<void>,
                                           onDeleteAnimal: (id: string) => Promise<void>,
                                           apiAnimals: string[],
                                       }) {

    const [filterValue, setFilterValue] = useState<string>("");
    const [radioValue, setRadioValue] = useState<string>("all");
    const objectList = props.animals;

    return (
        <>
            <h2>Tiere</h2>
            <GeneralSearch setFilterValue={setFilterValue} setRadioValue={setRadioValue}/>
            <ul>
                {filterGeneral(filterValue, radioValue, objectList)
                    .map(animal =>
                        <AnimalListItem key={animal.id} animal={animal} onDeleteAnimal={props.onDeleteAnimal}/>
                    )}

            </ul>

            <AddAnimal addAnimal={props.addAnimal} apiAnimals={props.apiAnimals}/>
        </>
    );
}
