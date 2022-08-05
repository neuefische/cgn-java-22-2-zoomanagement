import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import useAnimals from "../animal/useAnimals";
import usePlants from "../plant/usePlants";
import useTrucks from "../truck/useTrucks";
import useEmployee from "../employees/useEmployee";
import AnimalDetails from "../animal/AnimalDetails";

export default function AllRoutes() {

    const animalHook = useAnimals();
    const plantHook = usePlants();
    const truckHook = useTrucks();
    const employeeHook = useEmployee();

    return (

        <Routes>
            <Route path={"/"} element={<Home animalHook={animalHook}
                                             plantHook={plantHook}
                                             truckHook={truckHook}
                                             employeeHook={employeeHook}
            />}/>
            <Route path={"/:id"}
                   element={<AnimalDetails animal={animalHook.animals} onPlaceAnimal={animalHook.onPlaceAnimal}/>}/>
        </Routes>

    )
}