import React from 'react';
import './App.css';
import usePlants from "./plant/usePlants";
import PlantList from "./plant/PlantList";
import TruckGallery from "./truck/TruckGallery";
import useTrucks from "./truck/useTrucks";
import Employees from "./employees/Employees";
import useEmployee from "./employees/useEmployee";
import useAnimals from "./animal/useAnimals";
import AnimalList from "./animal/AnimalList";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GameBoard from "./grid/GameBoard";

export default function App() {

    const {animals, addAnimal, onDeleteAnimal} = useAnimals();
    const {plants, addPlant, deletePlant} = usePlants();
    const {trucks, addTruck} = useTrucks();
    const {employees, addEmployee, deleteEmployee} = useEmployee();

    return <>
        <h1>Zoo-Management</h1>
        <PlantList plants={plants} addPlant={addPlant} deletePlant={deletePlant}/>
        <TruckGallery trucks={trucks} addTruck={addTruck}/>
        <AnimalList animals={animals} addAnimal={addAnimal} onDeleteAnimal={onDeleteAnimal}/>
        <Employees employees={employees} addEmployee={addEmployee} onDeleteEmployee={deleteEmployee}/>

        <ToastContainer/>
        <GameBoard cell={cell} gameCells={gameCells}
        </>;

}
