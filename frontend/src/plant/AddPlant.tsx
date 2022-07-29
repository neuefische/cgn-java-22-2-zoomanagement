import {FormEvent, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type AddPlantProps = {
    addPlant: (name: string) => void;
}
export default function AddPlant(props: AddPlantProps) {
    const [addPlantString, setAddPlantString] = useState<string>('')
    const submitInput = (event: FormEvent<HTMLFormElement>) => {
        if (addPlantString !== "") {
            props.addPlant(addPlantString);
            setAddPlantString('')
        } else {
            toast("Empty String");
        }
        event.preventDefault();
    }
    return <form onSubmit={submitInput}>
        <input type={"input"} value={addPlantString} onChange={event => setAddPlantString(event.target.value)}/>
        <button type={"submit"}>hinzufügen</button>
        <ToastContainer/>
    </form>
}
