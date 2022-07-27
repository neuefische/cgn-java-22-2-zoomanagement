import {useState} from "react";
import axios from "axios";


export default function usePlants() {

    const [plants, setPlants] = useState()

    const getAllPlants = () => {
        axios.get("/api/plants")
            .then(response => {
                return response.data
            })
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }


}