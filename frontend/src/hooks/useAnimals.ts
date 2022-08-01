import axios from "axios";
import {useEffect, useState} from "react";
import {Animal} from "../components/animal/Animal";

import {NewAnimal} from "../components/animal/NewAnimal";

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

    const addAnimal = async (animalName: string) => {

        const newAnimal: NewAnimal = {name: animalName}

        await axios.post("/api/animals", newAnimal)
            .then(getAnimalList)


    }

    return {animals, addAnimal}
}
