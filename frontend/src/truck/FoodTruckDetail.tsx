import {useParams} from "react-router-dom";
import Truck from "./Truck";
import {useState} from "react";


type FoodTruckDetailsProps = { trucks: Truck[], getTruckById: (id: string | undefined) => Truck }

export default function FoodTruckDetail(props: FoodTruckDetailsProps) {

    const {id} = useParams();
    const [valueX, setValueX] = useState("");
    const [valueY, setValueY] = useState("");


    // const truck: Truck | undefined = props.trucks.find((e: Truck) => e.id === id);
    const truck: Truck | undefined = props.getTruckById(id);


    return (
        <>
            <h2>{truck?.name}</h2>
            <form>
                <label> X - Koordinate : <input type="text" value={valueX}
                                                onChange={(e) => setValueX(e.target.value)}></input></label> <br/>
                <br/>
                <label>Y - Koordinate : <input type="text" value={valueY}
                                               onChange={(e) => setValueY(e.target.value)}></input></label> <br/>
                <br/>
                <button>speichern</button>

            </form>

        </>
    )

}