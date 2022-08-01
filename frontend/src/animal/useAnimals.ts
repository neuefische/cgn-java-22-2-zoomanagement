import axios from "axios";
import {useEffect, useState} from "react";
import {Animal} from "./Animal";

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

        const newAnimal = {name: animalName}

        axios.post("/api/animals", newAnimal)
            .then(response => response.data)
            .then(data => {
                return data;
            })
            .then(getAnimalList)
    }

    return {animals}
}
