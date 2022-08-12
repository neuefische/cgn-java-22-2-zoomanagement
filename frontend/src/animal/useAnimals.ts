import axios from "axios";
import {useEffect, useState} from "react";
import {Animal} from "./Animal";
import {toast} from "react-toastify";
import {NewAnimal} from "./NewAnimal";
import {PlantType} from "../plant/PlantType";


export default function useAnimals(plants: PlantType[]) {

    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        getAnimalList()
    }, [])

    const getAnimalList = () => {
        axios.get("/api/animals")
            .then(response => response.data)
            .then(data => setAnimals(data))
    }

    const notify = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_LEFT
        });
    };

    const addAnimal = (animalName: string) => {
        const newAnimal: NewAnimal = {name: animalName}
        if (animals.length < plants.length) {
            return axios.post("/api/animals", newAnimal)
                .then(getAnimalList)
        } else {
            notify("not enough plants");
            return Promise.reject();
        }
    }

    const onDeleteAnimal = (id: string) => {
        return axios.delete(`/api/animals/${id}`)
            .then(getAnimalList)
            .catch(
                error => {
                    toast.error(error.message, {
                            position: toast.POSITION.TOP_LEFT
                        }
                    )
                })
    }

    return {animals, addAnimal, onDeleteAnimal}
}
