import {ChangeEvent, useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./AddPlant.css"

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

    const notify = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_LEFT
        });
    };

    const submitInput = () => {
        props.addPlant(plantNameToAdd)
            .then(() => setPlantNameToAdd(''))
            .catch((error) => {
                notify("Hi sorry!!! " + error.message)
            })
    }

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setPlantNameToAdd(event.target.value);
    }
    return <form onSubmit={submitInput}>
        <select className={"selectDropdown"} value={plantNameToAdd}
                onChange={handleChange}>
            {props.apiPlants.map(plant =>
                <option className={"option"} value={plant}>{plant}</option>)}
        </select>
        <button className={"addPlantBtn"} type={"submit"}><img src={"../pictures/save.png"} alt={"hinzufügen"}/>
        </button>
        <ToastContainer/>
    </form>
}
