import React from 'react';
import './App.css';
import useAnimals from "./components/animals/hooks/useAnimals";
import AnimalList from "./components/animals/AnimalList/AnimalList";

export default function App() {

    const {animals} = useAnimals();

    return (
        <>
            <h1>Zoo-Management</h1>
            <AnimalList animals={animals}/>
        </>
    );
}
