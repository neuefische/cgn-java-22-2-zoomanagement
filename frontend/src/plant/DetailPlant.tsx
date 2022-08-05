import {useParams} from "react-router-dom";
import {PlantType, PositionType} from "./PlantType";
import {ChangeEvent, useState} from "react";

export default function DetailPlant({...props}){

    console.log({...props})
    const {id} = useParams();
    let plant: PlantType;
    plant = props.plants.find((e: PlantType) => e.id === id)

    const [updatedPlant, setUpdatedPlant] = useState<PlantType>(plant);
    const updatedPlantDetails = (xPosition:string)=> {
        console.log(plant.name);
        setUpdatedPlant({
            id: updatedPlant.id,
            name: updatedPlant.name,
            position:{x: xPosition,
                      y: updatedPlant.position.y
            }
            })
    }

    return (<>
            <h2>{plant.name}</h2>
            <form >
                <label htmlFor="xInput">X - Koordinate :
                    <input id="xInput" type="text" value={updatedPlant.position.x}
                           onChange={(event:ChangeEvent<HTMLInputElement>)  => {
                               updatedPlantDetails(event.target.value)
                           }}/>

                </label><br/>

                <label htmlFor="yInput">Y - Koordinate :
                    <input id="yInput" type="text" value={updatedPlant.position.y}
                           onChange={(event:ChangeEvent<HTMLInputElement>)  => {
                               setUpdatedPlant({
                                   id: updatedPlant.id,
                                   name: updatedPlant.name,
                                   x: updatedPlant.position.x,
                                   y: Number(event.target.value)})
                           }}/>
                </label><br/>
                <button type={"submit"}>speichern</button>
            </form>
        </>
    )
}//onSubmit={props.updatePlant(updatedPlant)}
