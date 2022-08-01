import {ChangeEvent, FormEvent, useState} from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type AddAnimalProps = {
    addAnimal: (name: string) => Promise<void>
}

export default function AddAnimal(props: AddAnimalProps) {

    const [animalName, setAnimalName] = useState<string>("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        props.addAnimal(animalName)
            .catch((error) => {
                notify("Hi sorrry!!! " + error.message)
            })
        setAnimalName("");
    }


    const notify = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_LEFT
        });
    };


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAnimalName(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={animalName}/>
            <button type={"submit"}>hinzufügen</button>
        </form>
    );
}
