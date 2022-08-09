import {FormEvent, useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type AddPlantProps = {
    addPlant: (name: string) => Promise<void>,
    apiPlants: string[],
}
export default function AddPlant(props: AddPlantProps) {

    const [plantNameToAdd, setPlantNameToAdd] = useState<string>('')

    useEffect(
        () => {
            if (props.apiPlants && props.apiPlants.length > 0) {
                setPlantNameToAdd(props.apiPlants[0])
            }
        }, [props.apiPlants]
    )

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
        <select value={plantNameToAdd} onChange={event => setPlantNameToAdd(event.target.value)}>
            {props.apiPlants.map(plant =>
                <option value={plant}>{plant}</option>)}
        </select>
        <button type={"submit"}>hinzufügen</button>
        <ToastContainer/>
    </form>
}
