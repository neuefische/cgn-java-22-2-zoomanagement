import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import TruckGallery from "./components/TruckGallery";
import useTrucks from "./hooks/useTrucks";

export default function App() {

    const [message, setMessage] = useState();

    axios.get("/hello")
        .then((response) => response.data)
        .then(setMessage)


    const {trucks} = useTrucks()


    return (
        <main>
            <h1>{message}</h1>
            <TruckGallery trucks={trucks}/>
        </main>
    )
}
