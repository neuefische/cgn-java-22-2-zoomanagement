import React from 'react';
import './App.css';
import usePlants from "./plant/usePlants";
import PlantList from "./plant/PlantList";
import TruckGallery from "./truck/TruckGallery";
import Employees from "./employees/Employees";
import AnimalList from "./animal/AnimalList";
import {ToastContainer} from 'react-toastify';

import useTrucks from "./truck/useTrucks";
import useEmployee from "./employees/useEmployee";
import useAnimals from "./animal/useAnimals";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

    const {animals, addAnimal} = useAnimals();
    const {plants} = usePlants();
    const {trucks, addTruck} = useTrucks()

    const {employees, addEmployee, deleteEmployee} = useEmployee();

    return <>
        <h1>Zoo-Management</h1>
        {plants ? <PlantList plants={plants}/> : "Loading..."}
        <TruckGallery trucks={trucks} addTruck={addTruck}/>
        <AnimalList animals={animals} onAddAnimal={addAnimal}/>
        <Employees employees={employees} addEmployee={addEmployee} onDeleteEmployee={deleteEmployee}/>
        <ToastContainer/>
    </>;

}
