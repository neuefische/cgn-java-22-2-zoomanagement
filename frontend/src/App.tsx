import React from 'react';
import './App.css';
import usePlants from "./plant/usePlants";
import PlantList from "./plant/PlantList";
import TruckGallery from "./components/TruckGallery";
import useTrucks from "./hooks/useTrucks";
import useAnimals from "./components/animals/hooks/useAnimals";
import AnimalList from "./components/animals/AnimalList/AnimalList";

export default function App() {

    const {animals} = useAnimals();
    const {plants, addPlant} = usePlants();
    const {trucks} = useTrucks();

    return <>
        <h1>Zoo-Management</h1>
        {plants ? <PlantList plants={plants} addPlant={addPlant}/> : "Loading..."}
        <TruckGallery trucks={trucks}/>
        <AnimalList animals={animals}/>
    </>;
}
