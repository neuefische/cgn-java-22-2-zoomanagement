import {useParams} from "react-router-dom";
import Truck from "./Truck";


type FoodTruckDetailsProps = { trucks: Truck[] }

export default function FoodTruckDetail(props: FoodTruckDetailsProps) {

    const {id} = useParams();
    const truck: Truck | undefined = props.trucks.find((e: Truck) => e.id === id);


    return (
        <>
            <h2>{truck?.name}</h2>
            <form>
                <label> X - Koordinate : </label> <br/>
                <br/>
                <label>Y - Koordinate : </label> <br/>
                <br/>
                <button>speichern</button>

            </form>

        </>
    )

}