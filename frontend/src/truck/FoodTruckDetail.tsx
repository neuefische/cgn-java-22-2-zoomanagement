import {useParams} from "react-router-dom";
import Truck from "./Truck";


type FoodTruckDetailsProps = { trucks: Truck[] }

export default function FoodTruckDetail(props: FoodTruckDetailsProps) {

    const {id} = useParams();
    const truck: Truck | undefined = props.trucks.find((e: Truck) => e.id === id);
    console.log(id, truck, props.trucks)

    return (
        <>
            <h2>{truck?.name}</h2>


        </>
    )

}