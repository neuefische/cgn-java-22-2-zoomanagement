import {useEffect, useState} from "react";
import axios from "axios";
import {NewPlantType, PlantType, PositionType} from "./PlantType";
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

    const deletePlant = (id: string) => {
        return axios.delete(`/api/plants/${id}`)
            .then(getAllPlants)
            .catch(error => {
                toast.error("Leider ist ein Fehler aufgetreten " + error.message)
            })
    }


    const updatePlant = (plant: PlantType, position: PositionType) => {
        const updatedPlantWithNewPosition = {
            id: plant.id,
            name: plant.name,
            position: position
        }
        return axios.put(`/api/plants/${plant.id}`, updatedPlantWithNewPosition)
            .then(getAllPlants)
            .catch(error => {
                toast("Leider ist ein Fehler aufgetreten " + error.message)
            })
    }

    return {plants, addPlant, deletePlant, updatePlant}

}
