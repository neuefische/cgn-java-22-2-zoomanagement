import Truck from "./Truck";
import AddTruck from "./AddTruck";
import {useNavigate} from "react-router-dom";


type TruckGalleryProps = {
    trucks: Truck[],
    addTruck: (name: string) => Promise<void>,
    deleteTruck: (id: string) => Promise<void>,
    getTruckById: (id: string) => Truck,
}

export default function TruckGallery(props: TruckGalleryProps) {

    const navigate = useNavigate();

    return (
        <>
            <h2>Food-Trucks</h2>
            <AddTruck addTruck={props.addTruck}/>
            <ul>
                {props.trucks
                    .map(truck => <li key={truck.id}>{truck.name}
                        <button onClick={() => props.deleteTruck(truck.id)}>Löschen</button>
                        <button onClick={() => navigate("/foodtrucks/" + truck.id)}>Details</button>
                        </li>
                    )}
            </ul>
        </>
    )
}
