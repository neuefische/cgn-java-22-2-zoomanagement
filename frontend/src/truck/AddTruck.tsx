import {ChangeEvent, FormEvent, useState} from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type AddTruckProps = {
    addTruck: (name: string, position: string) => Promise<void>
}
export default function AddTruck(props: AddTruckProps) {
    const [truckName, setTruckName] = useState<string>("")
    const [valueX, setValueX] = useState("");
    const [valueY, setValueY] = useState("");

    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTruckName(event.target.value)
    }
    const onTruckSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (truckName === "") return;

        props.addTruck(truckName, position)
            .catch((error) => {
                notify("Truck kann nicht hinzugefügt werden! Datenbankfehler " + error.message)
            })

        setTruckName("")
    }
    const notify = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_LEFT
        });
    };
    return (
        <form onSubmit={onTruckSubmit}>
            <label>Neuen Truck hinzufügen
                <input type="text" onChange={onNameChange} value={truckName}/>
            </label>
            <button>hinzufügen</button>
        </form>
    )
}
