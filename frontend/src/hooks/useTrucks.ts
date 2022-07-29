import {useEffect, useState} from "react";
import Truck from "../truck/Truck";
import axios from "axios";


export default function useTrucks() {

    const [trucks, setTrucks] = useState<Truck[]>([]);

    useEffect(() => {
        getAllTrucks()
    }, [])

    const getAllTrucks = () => {
        axios.get("/api/trucks")
            .then((response) => response.data)
            .then((data) => setTrucks(data))
    }

    const addTruck = (name: string) => {
        const newTruck = {
            name: name
        }
        return axios.post("/api/trucks", newTruck)
            .then(() => getAllTrucks())
    }
    return {trucks, addTruck}
}
