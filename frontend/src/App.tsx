import React from 'react';
import './App.css';
import usePlants from "./plant/usePlants";
import PlantList from "./plant/PlantList";
import TruckGallery from "./trucks/TruckGallery";
import useTrucks from "./trucks/useTrucks";
import Employees from "./employees/Employees";
import useEmployee from "./employees/useEmployee";
import useAnimals from "./animal/useAnimals";
import AnimalList from "./animal/AnimalList";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

    const {animals} = useAnimals();
    const {plants} = usePlants()
    const {trucks} = useTrucks()

    const {employees, addEmployee} = useEmployee();


    return <>
        <h1>Zoo-Management</h1>
        {plants ? <PlantList plants={plants}/> : "Loading..."}
        <TruckGallery trucks={trucks}/>
        <AnimalList animals={animals}/>
        <ToastContainer/>
        <Employees employees={employees} addEmployee={addEmployee}/>

    </>;
}
