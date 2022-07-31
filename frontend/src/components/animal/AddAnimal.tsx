import {ChangeEvent, FormEvent, useState} from "react";

export default function AddAnimal({...props}) {

    const [animalName, setAnimalName] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        typeof props.onAddAnimal(animalName) === "undefined" && setAnimalName("");
    }

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
