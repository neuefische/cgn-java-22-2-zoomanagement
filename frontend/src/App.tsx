import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import usePlants from "./hooks/usePlants";
import PlantList from "./components/PlantList";

export default function App() {

    const [message, setMessage] = useState();

    axios.get("/hello")
        .then((response) => response.data)
        .then(setMessage)

    const {plants} = usePlants()

    return (
        <div>
            <h1>{message}</h1>
            <PlantList plants={plants}/>
        </div>
    );
}
