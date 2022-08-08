import {ChangeEvent, useEffect, useState} from "react";
import {PlantType, PositionType} from "./PlantType";
import {useParams} from "react-router-dom";

type DetailPlantProps = {

    plants: PlantType[],
    updatePlant: (plant: PlantType, position: PositionType) => Promise<void>,
}

export default function DetailPlant(props: DetailPlantProps) {

    const {id} = useParams();


    const [plantToUpdate, setPlantToUpdate]=useState<PlantType>();
    const [xPosition, setXPosition] = useState<string>("");
    const [yPosition, setYPosition] = useState<string>("");


    useEffect(()=>{
        setXPosition(plantToUpdate?.position?.x||"")
        setYPosition(plantToUpdate?.position?.y||"")
        setPlantToUpdate(props.plants.find(p => p.id === id));

          },[props.plants, plantToUpdate])


    if(!plantToUpdate){
        return <>Nicht Gefunden</>
    }

    const plant=plantToUpdate;

    return (
        <>
               <div>
                    <h2>{plantToUpdate.name}</h2>
                    <form onSubmit={(event)=>{
                        event.preventDefault();
                        props.updatePlant(plant, {x:xPosition, y:yPosition}
                        )
                    }}>
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



        </>
    )
}
