import React from 'react';
import './App.css';
import usePlants from "./plant/usePlants";
import PlantList from "./plant/PlantList";
import TruckGallery from "./components/TruckGallery";
import useTrucks from "./hooks/useTrucks";
import useAnimals from "./hooks/useAnimals";
import AnimalList from "./components/animal/AnimalList";
import AddAnimal from "./components/animal/AddAnimal";

export default function App() {

    const {animals, addAnimal} = useAnimals();
    const {plants} = usePlants();
    const {trucks} = useTrucks();

    return <>
        <h1>Zoo-Management</h1>
        {plants ? <PlantList plants={plants}/> : "Loading..."}
        <TruckGallery trucks={trucks}/>
        <AnimalList animals={animals}/>
        <AddAnimal onAddAnimal={addAnimal}/>
    </>;
    
}
