import {Truck} from "./Truck";
import AddTruck from "./AddTruck";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import GeneralSearch from "../shared/GeneralSearch";
import {filterGeneral} from "../shared/helpers";


type TruckGalleryProps = {
    trucks: Truck[],
    addTruck: (name: string) => Promise<void>,
    deleteTruck: (id: string) => Promise<void>,
    getTruckById: (id: string) => Truck | undefined,
    updateTruck: (truck: Truck) => Promise<void>,
}

export default function TruckGallery(props: TruckGalleryProps) {

    const [filterValue, setFilterValue] = useState<string>("");
    const [radioValue, setRadioValue] = useState<string>("all");
    const objectList = props.trucks;


    const navigate = useNavigate();

    return (
        <>
            <h2>Food-Trucks</h2>
            <GeneralSearch setFilterValue={setFilterValue} setRadioValue={setRadioValue}/>

            <ul>
                {filterGeneral(filterValue, radioValue, objectList)
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
