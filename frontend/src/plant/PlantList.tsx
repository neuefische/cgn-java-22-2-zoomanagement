import AddPlant from "./AddPlant";
import {PlantType} from "./PlantType";
import Plant from "./Plant";

type PlantListProps = {
    plants: PlantType[],
    addPlant: (name: string) => Promise<void>,
    deletePlant : (id : string) => void,
}
export default function PlantList(props: PlantListProps) {

    return (
        <>
            <h2>Pflanzen</h2>
            <ul>
                {props.plants.map(plant => <Plant  key={plant.id} plant={plant} deletePlant={props.deletePlant}/>)}
            </ul>
            <AddPlant addPlant={props.addPlant}/>
        </>
    )
}
