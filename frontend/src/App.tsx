import React from 'react';
import './App.css';
import usePlants from "./plant/usePlants";
import PlantList from "./plant/PlantList";
import TruckGallery from "./truck/TruckGallery";
import useTrucks from "./hooks/useTrucks";
import Employees from "./employees/components/Employees";
import useEmployee from "./employees/service/useEmployee";
import useAnimals from "./hooks/useAnimals";
import AnimalList from "./components/animal/AnimalList";
import {ToastContainer} from 'react-toastify';

export default function App() {

    const {animals} = useAnimals();
    const {plants} = usePlants()
    const {trucks, addTruck} = useTrucks()
    const {employees} = useEmployee();


    return <>
        <h1>Zoo-Management</h1>
        {plants ? <PlantList plants={plants}/> : "Loading..."}
        <TruckGallery trucks={trucks} addTruck={addTruck}/>
        <AnimalList animals={animals}/>
        <Employees employees={employees}/>
        <ToastContainer/>
    </>;
}
