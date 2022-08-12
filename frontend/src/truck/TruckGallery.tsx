import Truck from "./Truck";
import AddTruck from "./AddTruck";

type TruckGalleryProps = {
    trucks: Truck[],
    addTruck: (name: string) => Promise<void>,
}

export default function TruckGallery(props: TruckGalleryProps) {

    return (
        <>
            <h2>Food-Trucks</h2>

            <ul>
                {props.trucks
                    .map(truck => <li key={truck.id}>
                        <div className={"nameStyle"}>{truck.name}</div></li>
                    )}
            </ul>
            <AddTruck addTruck={props.addTruck}/>
        </>
    )
}
