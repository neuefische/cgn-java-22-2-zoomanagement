import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import PlantList from "./plant/PlantList";
import TruckGallery from "./truck/TruckGallery";
import AnimalList from "./animal/AnimalList";
import Employees from "./employees/Employees";
import useAnimals from "./animal/useAnimals";
import usePlants from "./plant/usePlants";
import useTrucks from "./truck/useTrucks";
import useEmployee from "./employees/useEmployee";
import AnimalDetails from "./animal/AnimalDetails";


export default function App() {

    const {animals, addAnimal, onDeleteAnimal, onPlaceAnimal} = useAnimals();
    const {plants, addPlant} = usePlants();
    const {trucks, addTruck} = useTrucks();
    const {employees, addEmployee, deleteEmployee} = useEmployee();

    return <HashRouter>

        <h1>Zoo-Management</h1>


        <ToastContainer/>
        <Routes>
            <Route path={"/"} element={
                <>
                    <PlantList plants={plants} addPlant={addPlant}/>
                    <TruckGallery trucks={trucks} addTruck={addTruck}/>
                    <AnimalList animals={animals} addAnimal={addAnimal} onDeleteAnimal={onDeleteAnimal}/>
                    <Employees employees={employees} addEmployee={addEmployee} onDeleteEmployee={deleteEmployee}/>
                </>
            }/>
            <Route path={"/:id"} element={<AnimalDetails animal={animals} onPlaceAnimal={onPlaceAnimal}/>}/>
        </Routes>
    </HashRouter>;

}
