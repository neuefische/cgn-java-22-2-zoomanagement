import {ChangeEvent, useEffect, useState} from "react";
import {PlantType, PositionType} from "./PlantType";
import {useParams} from "react-router-dom";

type DetailPlantProps = {

    plants: PlantType[],
    updatePlant: (plant: PlantType, position: PositionType) => Promise<void>,
}

export default function DetailPlant(props: DetailPlantProps) {


    const [xPosition, setXPosition] = useState("");
    const [yPosition, setYPosition] = useState("");
    const {id} = useParams();

    const plantToUpdate = props.plants.find(plant => plant.id === id);



    return (

        <>
            {plantToUpdate ? (
                <div>

                    <h2>{plantToUpdate.name}</h2>
                    <form onSubmit={(event)=>{
                        event.preventDefault();
                        props.updatePlant(plantToUpdate, {x:xPosition, y:yPosition}
                        )}}>
                        <label htmlFor="xInput">X - Koordinate :
                            <input name="x" value={xPosition} type="text"
                                   onChange={(e:ChangeEvent<HTMLInputElement>)=>setXPosition(e.target.value)}/>

                        </label><br/>

                        <label htmlFor="yInput">Y - Koordinate :
                            <input name="y"  type="text" value={yPosition}
                                   onChange={(e:ChangeEvent<HTMLInputElement>)=>setYPosition(e.target.value)}/>
                        </label><br/>
                        <button type={"submit"}>speichern</button>
                    </form>
                </div>
            ) : false}


        </>
    )
}
