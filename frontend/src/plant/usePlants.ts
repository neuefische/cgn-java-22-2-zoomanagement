import {useEffect, useState} from "react";
import axios from "axios";
import {Plant, PlantType} from "./Plant";

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
        const plantName: PlantType = {"name": name};
        return axios.post("/api/plants", plantName)
            .then(getAllPlants)
    }
    return {plants, addPlant}
}
