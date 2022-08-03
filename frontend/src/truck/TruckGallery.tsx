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
            <AddTruck addTruck={props.addTruck}/>
            <ul>
                {props.trucks
                    .map(truck => <li key={truck.id}>{truck.name}
                            <button onClick={() => props.deleteTruck(truck.id)}>Löschen</button>
                        </li>
                    )}
            </ul>
        </>
    )
}
