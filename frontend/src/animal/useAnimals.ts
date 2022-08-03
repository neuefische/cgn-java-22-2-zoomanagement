import axios from "axios";
import {useEffect, useState} from "react";
import {Animal} from "./Animal";
import {toast} from "react-toastify";

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
            .then(getAnimalList);
    }

    const onDeleteAnimal = (id: string) => {
        return axios.delete(`/api/animals/${id}`)
            .then(response => response.status)
            .then(getAnimalList)
            .catch((error) => {
                notify("Hi sorrry!!! " + error.message)
            })
    }


    const notify = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_LEFT
        });
    };


    return {animals, addAnimal, onDeleteAnimal}
}
