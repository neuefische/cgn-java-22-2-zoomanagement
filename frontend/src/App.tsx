import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import ShowEmployees from "./employees/components/ShowEmployees";
import useEmployee from "./employees/service/useEmployee";

export default function App() {

    const [message, setMessage] = useState();

    const {employees, getAllEmployees} = useEmployee();
    axios.get("/hello")
        .then((response) => response.data)
        .then(setMessage)

    return (
        <div>
            <h1>{message}</h1>

            <ShowEmployees employees={employees}/>
        </div>
    );
}
