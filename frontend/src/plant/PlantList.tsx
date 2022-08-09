import AddPlant from "./AddPlant";
import {Plant} from "./Plant";

export default function PlantList(props: { plants: Plant[], addPlant: (name: string) => Promise<void> }) {

    return (
        <>
            <h2>Pflanzen</h2>
            <ul>
                {props.plants.map(plant => <li key={plant.id}>
                    <div className={"nameStyle"}>{plant.name}</div></li>)}
            </ul>
            <AddPlant addPlant={props.addPlant}/>
        </>
    )
}
