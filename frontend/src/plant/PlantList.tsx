import AddPlant from "./AddPlant";
import {PlantType} from "./PlantType";
import Plant from "./Plant";

type PlantListProps = {
    plants: PlantType[],
    addPlant: (name: string) => Promise<void>,
    deletePlant: (id: string) => Promise<void>,
}
export default function PlantList(props: PlantListProps) {

    return (
        <>
            <h2>Pflanzen</h2>
            <ul>
                {props.plants.map(plant => <li key={plant.id}>
                    <div className={"nameStyle"}>
                        <Plant plant={plant} deletePlant={props.deletePlant}/>
                    </div>
                </li>)}
            </ul>
            <AddPlant addPlant={props.addPlant}/>
        </>
    )
}
