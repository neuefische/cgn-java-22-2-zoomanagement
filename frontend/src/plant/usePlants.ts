import {useEffect, useState} from "react";
import axios from "axios";
import {Plant, PlantType} from "./Plant";
import {toast} from "react-toastify";

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

    const notify = () => toast("cannot access database");

    const addPlant = (name: string) => {
        const plantName: PlantType = {"name": name};
        console.log(name);
        axios.post("/api/plants", plantName)
            .then(response => console.log(response))
            .then(getAllPlants)
            .catch(error => {
                notify();
                console.error(error);
            })
    }

    return {plants, addPlant}
}
