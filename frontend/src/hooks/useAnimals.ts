import axios from "axios";
import {useEffect, useState} from "react";
import {Animal} from "../components/animal/Animal";

export default function useAnimals() {

    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        getAnimalList()
    }, [])

    const getAnimalList = () => {
        axios.get("/api/animals")
            .then(response => response.data)
            .then(setAnimals)
    }

    return {animals}
}
