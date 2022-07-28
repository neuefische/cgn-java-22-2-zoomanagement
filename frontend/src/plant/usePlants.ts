import {useEffect, useState} from "react";
import axios from "axios";
import {Plant} from "./Plant";


export default function usePlants() {

    const [plants, setPlants] = useState<Plant[]>()

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

    return {plants}
}