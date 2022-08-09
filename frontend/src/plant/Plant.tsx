import {PlantType} from "./PlantType";
import {useNavigate} from "react-router-dom";

type PlantProps = {
    plant : PlantType,
    deletePlant : (id : string) => void,
}

export default function Plant  (props: PlantProps)  {

    const navigate = useNavigate();

    return (
        <div key={props.plant.id}>{props.plant.name}
            <button onClick={(event) => props.deletePlant(props.plant.id)}>löschen</button>
            <button onClick={(event) => navigate(`/plant/${props.plant.id}`)}>details</button>
        </div>
    )

}
