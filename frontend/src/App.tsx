import React from 'react';
import './App.css';
import usePlants from "./plant/usePlants";
import PlantList from "./plant/PlantList";
import useAnimals from "./components/animals/hooks/useAnimals";
import AnimalList from "./components/animals/AnimalList/AnimalList";

export default function App() {

    const {animals} = useAnimals();

    const {plants} = usePlants()

    return <>
        <h1>Zoo-Management</h1>
        {plants ? <PlantList plants={plants}/> : "Loading..."}
        <AnimalList animals={animals}/>
    </>;
}
