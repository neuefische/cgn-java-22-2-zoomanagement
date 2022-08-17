import axios from "axios";
import {useEffect, useState} from "react";
import {Animal} from "./Animal";
import {toast} from "react-toastify";
import {NewAnimal} from "./NewAnimal";
import {PlantType} from "../plant/PlantType";
import {Position} from "../shared/Position";
import {Emoji} from "./Emoji";

export default function useAnimals(plants: PlantType[]) {


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
                    onErrorFunction(error)
                })
    }

    const onPlaceAnimal = (animal: Animal, position: Position) => {
        const newAnimalWithPosition: Animal = {
            name: animal.name,
            id: animal.id,
            position: position,
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

    const onAddEmoji = (animal: Animal, emoji :Emoji) => {
        const newAnimalWithEmoji : Animal = {
            name: animal.name,
            id: animal.id,
            emoji: emoji
        }
        return axios.put(`/api/animals/emoji/${animal.id}`, newAnimalWithEmoji)
            .catch(error => {
                onErrorFunction(error)
            })

    }

    return {animals, addAnimal, onDeleteAnimal, onPlaceAnimal, apiAnimals,onAddEmoji}
}
