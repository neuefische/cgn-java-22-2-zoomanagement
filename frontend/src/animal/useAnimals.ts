import axios from "axios";
import {useEffect, useState} from "react";
import {Animal} from "./Animal";
import {NewAnimal} from "./NewAnimal";


export default function useAnimals() {

    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        getAnimalList()
    }, [])

    const getAnimalList = () => {
        axios.get("/api/animals")
            .then(response => response.data)
            .then(data => setAnimals(data))
    }

    const addAnimal = (animalName: string) => {

        const newAnimal: NewAnimal = {name: animalName}

        return axios.post("/api/animals", newAnimal)
            .then(getAnimalList)
    }

    return {animals, addAnimal}
}
