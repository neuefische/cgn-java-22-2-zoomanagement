import Truck from "./Truck";
import AddTruck from "./AddTruck";
import {useState} from "react";
import GeneralSearch from "../shared/GeneralSearch";
import {filterGeneral} from "../shared/helpers";


type TruckGalleryProps = {
    trucks: Truck[],
    addTruck: (name: string) => Promise<void>,
    deleteTruck: (id: string) => Promise<void>
}

export default function TruckGallery(props: TruckGalleryProps) {

    const [filterValue, setFilterValue] = useState<string>("");
    const [radioValue, setRadioValue] = useState<string>("all");
    const objectList = props.trucks;


    return (
        <>
            <h2>Food-Trucks</h2>
            <GeneralSearch setFilterValue={setFilterValue} setRadioValue={setRadioValue}/>

            <ul>
                {filterGeneral(filterValue, radioValue, objectList)
                    .map(truck => <li key={truck.id}>
                            <div className={"nameStyle"}>{truck.name}
                                <button onClick={() => props.deleteTruck(truck.id)}>Löschen</button>
                            </div>
                        </li>
                    )}
            </ul>
            <AddTruck addTruck={props.addTruck}/>
        </>
    )
}
