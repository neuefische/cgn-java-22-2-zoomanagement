import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import usePlants from "./plant/usePlants";
import PlantList from "./plant/PlantList";
import ShowEmployees from "./employees/components/ShowEmployees";
import useEmployee from "./employees/service/useEmployee";

export default function App() {

    const [message, setMessage] = useState();

    const {employees, getAllEmployees} = useEmployee();
    axios.get("/hello")
        .then((response) => response.data)
        .then(setMessage)

    const {plants} = usePlants()

    return <>
        <h1>{message}</h1>
        {plants ? <PlantList plants={plants}/> : "Loading..."}
        <ShowEmployees employees={employees}/>
    </>;
}
