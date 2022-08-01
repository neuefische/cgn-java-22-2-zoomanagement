import Truck from "./Truck";

type TruckGalleryProps = {
    trucks: Truck[]
}

export default function TruckGallery(props: TruckGalleryProps) {
    return (
        <>
            <h2>Food-Trucks</h2>
            <ul>
                {props.trucks
                    .map(truck => <li key={truck.id}>{truck.name}</li>
                    )}
            </ul>
        </>
    )
}
