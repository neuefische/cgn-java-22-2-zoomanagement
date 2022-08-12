import {FormEvent, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type AddPlantProps = {
    addPlant: (name: string) => Promise<void>,
}
export default function AddPlant(props: AddPlantProps) {
    const [plantNameToAdd, setPlantNameToAdd] = useState<string>('')
    const notify = (message: string) => toast(message);
    const submitInput = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (plantNameToAdd !== "") {
            props.addPlant(plantNameToAdd)
                .then(() => {
                    setPlantNameToAdd('')
                })
                .catch(error => notify(error.message)
                )
        } else {
            notify("Bitte geben Sie einen Pflanzennamen ein!");
        }

    }
    return <form onSubmit={submitInput}>
        <input type={"input"} value={plantNameToAdd} onChange={event => setPlantNameToAdd(event.target.value)}/>
        <button type={"submit"}>hinzufügen</button>
        <ToastContainer/>
    </form>
}
