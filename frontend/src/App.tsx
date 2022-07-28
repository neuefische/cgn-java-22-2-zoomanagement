import React from 'react';
import './App.css';
import usePlants from "./plant/usePlants";
import PlantList from "./plant/PlantList";
import TruckGallery from "./components/TruckGallery";
import useTrucks from "./hooks/useTrucks";
import useAnimals from "./components/animals/hooks/useAnimals";
import AnimalList from "./components/animals/AnimalList/AnimalList";
import ShowEmployees from "./employees/components/ShowEmployees";
import useEmployee from "./employees/service/useEmployee";

export default function App() {

    const {animals} = useAnimals();
    const {plants} = usePlants()
    const {trucks} = useTrucks()
    const {employees, getAllEmployees} = useEmployee();

    return <>
    <h1>Zoo-Management</h1>
            {plants ? <PlantList plants={plants}/> : "Loading..."}
        <TruckGallery trucks={trucks}/>
        <AnimalList animals={animals}/>
        <ShowEmployees employees={employees}/>
    </>;
}
