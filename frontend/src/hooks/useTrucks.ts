import {useEffect, useState} from "react";
import Truck from "../components/Truck";
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
    return {trucks}
}
