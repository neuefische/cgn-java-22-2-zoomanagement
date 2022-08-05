import {useParams} from "react-router-dom";
import Truck from "./Truck";


type FoodTruckDetailsProps = { getTruckById: (id: String) => Truck }

export default function FoodTruckDetail(props: FoodTruckDetailsProps) {

    const {id} = useParams();

    return (
        <>
            <h2>{props.getTruckById.name}</h2>


        </>
    )

}