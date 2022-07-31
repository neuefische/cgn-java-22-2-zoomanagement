import axios from "axios";
import {useEffect, useState} from "react";
import {Animal} from "../components/animal/Animal";
import {toast, Zoom} from "react-toastify";
import {NewAnimal} from "../components/animal/NewAnimal";

export default function useAnimals() {

    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        getAnimalList()
    }, [])


    const toastyNote = (errorMessage: string) => {

        toast.error(errorMessage, {
            position: "top-center",
            autoClose: false,
            closeOnClick: true,
            draggable: true,
            transition: Zoom,
        });

    }

    const getAnimalList = () => {

        axios.get("/api/animals")
            .then(response => response.data)
            .then(data => setAnimals(data))

    }

    const addAnimal = (animalName: string) => {

        const newAnimal: NewAnimal = {name: animalName}

        axios.post("/api/animals", newAnimal)
            .then(response => response.data)
            .then(data => {
                return data;
            })
            .then(getAnimalList)
            .catch((error: any) => {
                toastyNote("Adding item failed - consult console for details and/or try again, please.");
                console.error(error.message);
            });

    }

    return {animals, addAnimal}
}
