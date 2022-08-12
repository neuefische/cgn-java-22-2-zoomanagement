import {Truck} from "./Truck";
import AddTruck from "./AddTruck";
import {useNavigate} from "react-router-dom";


type TruckGalleryProps = {
    trucks: Truck[],
    addTruck: (name: string) => Promise<void>,
    deleteTruck: (id: string) => Promise<void>,
    getTruckById: (id: string) => Truck | undefined,
    updateTruck: (truck: Truck) => Promise<void>,
}

export default function TruckGallery(props: TruckGalleryProps) {

    const navigate = useNavigate();

    return (
        <>
            <h2>Food-Trucks</h2>
            <ul>
                {props.trucks
                    .map(truck =>
                        <li key={truck.id}>
                            <div className={"nameStyle"}>{truck.name}
                                <button onClick={() => props.deleteTruck(truck.id)}>Löschen</button>
                                <button onClick={() => navigate("/trucks/" + truck.id)}>Details</button>
                            </div>
                        </li>
                    )}
            </ul>
            <AddTruck addTruck={props.addTruck}/>
        </>
    )
}
