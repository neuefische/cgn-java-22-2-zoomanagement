import {Animal} from "./Animal";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {Position} from "../shared/Position";


export default function AnimalDetails(props: { animal: Animal[], onPlaceAnimal: (animal: Animal, position: Position) => void }) {
    const [xCoordinate, setXCoordinate] = useState('');
    const [yCoordinate, setYCoordinate] = useState('');
    const {id} = useParams();

    const animalToUpdate = props.animal.find(item => item.id === id);
    if (!animalToUpdate) {
        return <>
            Animal not found</>
    }
    return (
        <>
            <h2>{animalToUpdate.name}</h2>
            <p> X - Coordinate: {animalToUpdate.position?.x}<input type={"input"} value={xCoordinate}
                                                                   onChange={event => setXCoordinate(event.target.value)}/></p>
            <p> Y - Coordinate: {animalToUpdate.position?.y}<input type={"input"} value={yCoordinate}
                                       onChange={event => setYCoordinate(event.target.value)}/></p>
            <button onClick={() => {
                props.onPlaceAnimal(animalToUpdate, {x: xCoordinate, y: yCoordinate})
                setXCoordinate('')
                setYCoordinate('')
            }}>save
            </button>
        </>
    )
}
