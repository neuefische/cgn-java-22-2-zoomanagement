import AddPlant from "./AddPlant";
import {PlantType} from "./PlantType";
import Plant from "./Plant";
import "../App.css"
import {useState} from "react";
import GeneralSearch from "../shared/GeneralSearch";
import {filterGeneral} from "../shared/helpers";

type PlantListProps = {
    plants: PlantType[],
    addPlant: (name: string) => Promise<void>,
    deletePlant: (id: string) => Promise<void>,
    apiPlants: string[],
}
export default function PlantList(props: PlantListProps) {

    const [filterValue, setFilterValue] = useState<string>("");
    const [radioValue, setRadioValue] = useState<string>("all");
    const objectList = props.plants;

    return (
        <>
            <h2>Pflanzen</h2>
            <GeneralSearch setFilterValue={setFilterValue} setRadioValue={setRadioValue}/>
            <ul>
                {filterGeneral(filterValue, radioValue, objectList)
                    .map(plant => <li key={plant.id}>
                        <Plant plant={plant} deletePlant={props.deletePlant}/>
                    </li>)}
            </ul>
            <AddPlant addPlant={props.addPlant} apiPlants={props.apiPlants}/>
        </>
    )
}
