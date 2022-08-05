import {useParams} from "react-router-dom";
import Truck from "./Truck";


type FoodTruckDetailsProps = { getTruckById: (id: String | undefined) => Truck }

export default function FoodTruckDetail(props: FoodTruckDetailsProps) {

    const {id} = useParams();
    let id2 = id;

    return (
        <>
            <h2>{props.getTruckById({id}).name}</h2>


        </>
    )

}