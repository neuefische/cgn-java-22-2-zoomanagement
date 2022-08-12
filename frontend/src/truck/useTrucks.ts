import {useEffect, useState} from "react";
import Truck, {NewTruck} from "./Truck";
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
        const newTruck: NewTruck = {
            name,
        }
        return axios.post("/api/trucks", newTruck)
            .then(() => getAllTrucks())
    }
    return {trucks, addTruck, getAllTrucks}
}
