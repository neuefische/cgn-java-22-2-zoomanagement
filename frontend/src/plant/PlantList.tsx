import AddPlant from "./AddPlant";
import {Plant} from "./Plant";

export default function PlantList(props: { plants: Plant[], addPlant: (name: string) => void }) {

    return (
        <>
            <h2>Pflanzen</h2>
            <ul>
                {props.plants.map(plant => <li key={plant.id}>{plant.name}</li>)}
            </ul>
            <AddPlant addPlant={props.addPlant}/>
        </>
    )
}