import {PlantType} from "./PlantType";
type PlantProps = {
    plant : PlantType,
    deletePlant : (id : string) => void,
}

export default function Plant  (props: PlantProps)  {

    return (
        <li key={props.plant.id}>{props.plant.name}
        <button  onClick={(event) => props.deletePlant(props.plant.id)}>löschen</button></li>
    )

}
