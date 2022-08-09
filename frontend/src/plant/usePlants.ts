import {useEffect, useState} from "react";
import axios from "axios";
import {NewPlantType, PlantType} from "./PlantType";
import {toast} from "react-toastify";

export default function usePlants() {

    const [plants, setPlants] = useState<PlantType[]>([])
    const [apiPlants, setApiPlants] = useState<string[]>([])

    const getAllPlants = () => {
        axios.get("/api/plants")
            .then(response => {
                return response.data
            })
            .then(data => setPlants(data))
            .catch(error => console.error(error))
    }

    useEffect(
        () => getAllPlants(), []
    )
    const addPlant = (name: string) => {
        const newPlant: NewPlantType = {"name": name};
        return axios.post("/api/plants", newPlant)
            .then(getAllPlants)
    }

    const deletePlant = (id: string) => {
        return axios.delete("/api/plants/" + id)
            .then(getAllPlants)
            .catch(error => toast("Leider ist ein Fehler aufgetreten " + error.message))
    }

    const getPlantsFromApi = () => {
        axios.get("/api/plants/apiplants")
            .then(response => {
                return response.data
            })
            .then(data => setApiPlants(data))
            .catch(error => console.error(error))
    }

    useEffect(
        () => getPlantsFromApi(), []
    )


    return {plants, addPlant, deletePlant, apiPlants}
}
