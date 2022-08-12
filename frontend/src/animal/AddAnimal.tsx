import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './AddAnimal.css';

type AddAnimalProps = {
    addAnimal: (name: string) => Promise<void>,
    apiAnimals: string[],
}
export default function AddAnimal(props: AddAnimalProps) {
    const [animalName, setAnimalName] = useState<string>("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addAnimal(animalName)
            .then(() => {
                setAnimalName("");
            })
            .catch((error) => {
                notify("Hi sorrry!!! " + error.message)
            })
    }
    const notify = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_LEFT
        });
    };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAnimalName(event.target.value);
    }

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setAnimalName(event.target.value);
    }
    useEffect(() => {
        if (props.apiAnimals && props.apiAnimals.length > 0) {
            setAnimalName(props.apiAnimals[0]);
        }
    }, [props.addAnimal, props.apiAnimals])

    return (
        <form onSubmit={handleSubmit}>

            <select value={animalName} onChange={handleChange}>
                {props.apiAnimals.map(apiAnimal => (<option className="option" value={apiAnimal}>{apiAnimal}</option>))}
            </select>

            <button type={"submit"}><img src={"../pictures/save.png"} alt={"hinzufügen"}/></button>
        </form>
    );
}
