import {useEffect, useState} from "react";
import axios from "axios";
import {PlantType, NewPlantType} from "./PlantType";
import {toast} from "react-toastify";

export default function usePlants() {

    const [plants, setPlants] = useState<PlantType[]>([])

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

    const deletePlant = (id : string) => {
        return axios.delete("/api/plants/" + id)
            .then(getAllPlants)
            .catch(error => toast("Leider ist ein Fehler aufgetreten "+error.message))
    }
    return {plants, addPlant, deletePlant}
}
