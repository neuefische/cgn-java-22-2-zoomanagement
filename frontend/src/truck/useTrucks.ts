import {useEffect, useState} from "react";
import Truck, {NewTruck} from "./Truck";
import axios from "axios";
import {toast} from "react-toastify";


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
    const notify = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_LEFT
        });
    };

    const deleteTrucks = (id: string) => {
        return axios.delete("/api/trucks/" + id)
            .then((response) => response.status)
            .then(getAllTrucks)
            .catch(error => notify("existiert nicht"));
    }


    const getTruckById = (id: string) => {
        return
        trucks.map(filteredTruck => {
            if (filteredTruck.id === id) return filteredTruck
        })


        // const avengers = characters.filter(character => character.team === 'Avengers');


    }


    return {trucks, addTruck, deleteTrucks}

}
