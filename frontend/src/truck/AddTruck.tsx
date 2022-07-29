import {ChangeEvent, FormEvent, useState} from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type AddTruckProps = {
    addTruck: (name: string) => Promise<void>
}
export default function AddTruck(props: AddTruckProps) {
    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTruckName(event.target.value)
    }
    const [truckName, setTruckName] = useState<string>("")
    const onTruckSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.addTruck(truckName)
            .catch((error) => {
                notify("Hi sorrry!!! " + error.message)
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
            <label>Neuen Truck zufügen
                <input type="text" onChange={onNameChange} value={truckName}/>
            </label>
            <button>hinzufügen</button>
            {/*<ToastContainer />*/}
        </form>
    )
}