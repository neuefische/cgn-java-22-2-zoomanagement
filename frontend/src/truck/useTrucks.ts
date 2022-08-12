import {useEffect, useState} from "react";
import {NewTruck, Truck} from "./Truck";
import axios from "axios";
import {toast} from "react-toastify";

export default function useTrucks() {

    const [trucks, setTrucks] = useState<Truck[]>([]);

    const notify = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_LEFT
        });
    }

    useEffect(() => {
        fetchAllTrucks()
    }, [])

    const fetchAllTrucks = () => {
        axios.get("/api/trucks")
            .then((response) => response.data)
            .then((data) => setTrucks(data))
    }

    const addTruck = (name: string) => {
        const newTruck: NewTruck = {
            name: name
        }
        return axios.post("/api/trucks", newTruck)
            .then(() => fetchAllTrucks())
    }

    const deleteTruck = (id: string) => {
        return axios.delete("/api/trucks/" + id)
            .then((response) => response.status)
            .then(fetchAllTrucks)
            .catch(() => notify("Truck existiert nicht"));
    }

    const getTruckById = (id: string | undefined) => {
        return trucks.find(thisTruck => {
            return thisTruck.id === id
        })
    }

    const updateTruck = (truck: Truck) => {
        return axios.put("/api/trucks/" + truck.id, truck)
            .then((response) => response.status)
            .then(fetchAllTrucks)
            .catch(() => notify("Netzwerkrequest fehlgeschlagen."));
    }

    return {trucks, addTruck, deleteTruck, getTruckById, updateTruck}
}
