import Truck from "./Truck";
import AddTruck from "./AddTruck";


type TruckGalleryProps = {
    trucks: Truck[],
    addTruck: (name: string) => Promise<void>,
    deleteTruck: (id: string) => Promise<void>
}

export default function TruckGallery(props: TruckGalleryProps) {

    return (
        <>
            <h2>Food-Trucks</h2>

            <ul>
                {props.trucks
                    .map(truck => <li key={truck.id}>
                        <div className={"nameStyle"}>{truck.name}
                            <button onClick={() => props.deleteTruck(truck.id)}>Löschen</button>
                        </div></li>
                    )}
            </ul>
            <AddTruck addTruck={props.addTruck}/>
        </>
    )
}
