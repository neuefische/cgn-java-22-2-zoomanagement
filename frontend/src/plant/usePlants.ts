import {useEffect, useState} from "react";
import axios from "axios";
import {Plant, NewPlantType} from "./Plant";

export default function usePlants() {

    const [plants, setPlants] = useState<Plant[]>([])

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
    return {plants, addPlant}
}
