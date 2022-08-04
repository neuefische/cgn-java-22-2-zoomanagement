import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {HashRouter} from "react-router-dom";
import AllRoutes from "./shared/AllRoutes";
import Header from "./shared/Header";
import useAnimals from "./animal/useAnimals";
import usePlants from "./plant/usePlants";
import useTrucks from "./truck/useTrucks";
import useEmployee from "./employees/useEmployee";


export default function App() {

    const {animals, addAnimal, onDeleteAnimal} = useAnimals();
    const {plants, addPlant} = usePlants();
    const {trucks, addTruck} = useTrucks();
    const {employees, addEmployee, deleteEmployee} = useEmployee();

    return <>
        <Header/>
        <HashRouter>
            <AllRoutes animals={animals} addAnimal={addAnimal} onDeleteAnimal={onDeleteAnimal}
                       plants={plants} addPlant={addPlant}
                       trucks={trucks} addTruck={addTruck}
                       employees={employees} addEmployee={addEmployee} deleteEmployee={deleteEmployee}/>
        </HashRouter>
    </>;

}
