import {useParams} from "react-router-dom";
import {Truck} from "./Truck";
import {FormEvent, useState} from "react";

type FoodTruckDetailsProps = {
    trucks: Truck[], getTruckById: (id: string | undefined) => Truck | undefined,
    updateTruck: (truck: Truck) => void
}

export default function FoodTruckDetail(props: FoodTruckDetailsProps) {

    const {id} = useParams();
    const [valueX, setValueX] = useState("");
    const [valueY, setValueY] = useState("");
    const truck: Truck | undefined = props.getTruckById(id);

    const updateTruck = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTruck: Truck | undefined = truck;
        if (newTruck !== undefined) {
            newTruck.position = {x: valueX, y: valueY};
            props.updateTruck(newTruck);
        }
    }

    if (!truck) {
        return <>Truck nicht vorhanden</>;
    }


    return (
        <>
            <h2>{truck?.name}</h2>
            <form onSubmit={updateTruck}>

                <label> X - Koordinate : <input type="text" value={valueX}
                                                onChange={(e) => setValueX(e.target.value)}></input></label>
                <label>Y - Koordinate : <input type="text" value={valueY}
                                               onChange={(e) => setValueY(e.target.value)}></input></label>
                <button type={"submit"}>speichern</button>

            </form>
        </>
    )
}
