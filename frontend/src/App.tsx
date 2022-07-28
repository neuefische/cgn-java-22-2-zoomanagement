import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import usePlants from "./plant/usePlants";
import PlantList from "./plant/PlantList";

export default function App() {

    const [message, setMessage] = useState();

    axios.get("/hello")
        .then((response) => response.data)
        .then(setMessage)

    const {plants} = usePlants()

    return (
        <div>
            <h1>{message}</h1>
            {plants ? <PlantList plants={plants}/> : "Loading..."}
        </div>
    );
}
