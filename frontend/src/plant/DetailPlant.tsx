import {useParams} from "react-router-dom";
import {PlantType} from "./PlantType";

export default function DetailPlant({...props}){

    const {id} = useParams();
    let plant: PlantType;
    plant = props.plants.find((e: PlantType) => e.id === id)


    return (<>
            <h2>{plant.name}</h2>
            <form>
                <label htmlFor="xInput">X - Koordinate : <input id="xInput" type="text" value={0}/></label><br/>
                <label htmlFor="yInput">Y - Koordinate : <input id="yInput" type="text" value={0}/></label><br/>
                <button type={"submit"}>speichern</button>
            </form>
        </>
    )
}
