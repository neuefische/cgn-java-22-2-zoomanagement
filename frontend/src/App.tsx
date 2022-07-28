import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import usePlants from "./plant/usePlants";
import PlantList from "./plant/PlantList";
import TruckGallery from "./components/TruckGallery";
import useTrucks from "./hooks/useTrucks";

export default function App() {

    const [message, setMessage] = useState();

    axios.get("/hello")
        .then((response) => response.data)
        .then(setMessage)

    const {plants} = usePlants()
    const {trucks} = useTrucks()

    return <>
        <h1>{message}</h1>
        {plants ? <PlantList plants={plants}/> : "Loading..."}
        <TruckGallery trucks={trucks}/>
    </>;
}
