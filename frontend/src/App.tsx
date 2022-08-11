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
import {HashRouter} from "react-router-dom";
import AllRoutes from "./shared/AllRoutes";
import Header from "./shared/Header";

export default function App() {

    return <>
        <Header/>
        <HashRouter>
            <AllRoutes/>
        </HashRouter>
        <ToastContainer/>
    </>;
}