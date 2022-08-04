import axios from "axios";
import {useEffect, useState} from "react";
import {Animal, AnimalWithXY} from "./Animal";
import {toast} from "react-toastify";
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

    const onPlaceAnimal = (animal: Animal, xCoordinate: string, yCoordinate: string) => {
        const newAnimalWithXY: AnimalWithXY = {
            name: animal.name,
            id: animal.id,
            xCoordinate: xCoordinate,
            yCoordinate: yCoordinate
        }
        return axios.put(`/api/animals/${animal.id}`, newAnimalWithXY)
            .catch(error => {
                toast.error(error.message, {
                        position: toast.POSITION.TOP_LEFT
                    }
                )
            })
    }

    return {animals, addAnimal, onDeleteAnimal, onPlaceAnimal}
}