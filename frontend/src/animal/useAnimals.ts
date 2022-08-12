import axios from "axios";
import {useEffect, useState} from "react";
import {Animal} from "./Animal";
import {toast} from "react-toastify";
import {NewAnimal} from "./NewAnimal";
import {Position} from "../shared/Position";


export default function useAnimals() {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        getAnimalList()
    }, [])

    const onErrorFunction = (error: Error) => {
        toast.error(error.message, {
                position: toast.POSITION.TOP_LEFT
            }
        )
    }
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
                    onErrorFunction(error)
                })
    }

    const onPlaceAnimal = (animal: Animal, position: Position) => {
        const newAnimalWithPosition: Animal = {
            name: animal.name,
            id: animal.id,
            position: position
        }
        return axios.put(`/api/animals/${animal.id}`, newAnimalWithPosition)
            .catch(error => {
                onErrorFunction(error)
            })
    }
    const [apiAnimals, setApiAnimals] = useState<string[]>([])
    useEffect(() => {
        getAnimalAPIList()
    }, [])

    const getAnimalAPIList = () => {
        axios.get("/api/animals/apianimals")
            .then(response => response.data)
            .then(data => setApiAnimals(data))
    }
    return {animals, addAnimal, onDeleteAnimal, onPlaceAnimal, apiAnimals, getAnimalList}
}
