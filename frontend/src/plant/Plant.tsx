import {PlantType} from "./PlantType";
import {useNavigate} from "react-router-dom";

type PlantProps = {
    plant: PlantType,
    deletePlant: (id: string) => void,
}

export default function Plant(props: PlantProps) {

    const navigate = useNavigate();

    return (
        <div key={props.plant.id}>{props.plant.name}
            <button onClick={() => props.deletePlant(props.plant.id)}><img src={"../pictures/trash.png"} alt={"löschen"}/></button>
            <button onClick={() => navigate(`/plant/${props.plant.id}`)}><img src={"../pictures/details.png"} alt={"details"}/></button>
        </div>
    )

}
