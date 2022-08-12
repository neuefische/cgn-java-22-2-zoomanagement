import DetailPlant from "../plant/DetailPlant";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import useAnimals from "../animal/useAnimals";
import usePlants from "../plant/usePlants";
import useTrucks from "../truck/useTrucks";
import useEmployee from "../employee/useEmployee";
import FoodTruckDetail from "../truck/FoodTruckDetail";

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
            <Route path={"/trucks/:id"} element={<FoodTruckDetail
                trucks={truckHook.trucks} getTruckById={truckHook.getTruckById} updateTruck={truckHook.updateTruck}
            />}/>
            <Route path={"/plant/:id"}
                   element={<DetailPlant plants={plantHook.plants} updatePlant={plantHook.updatePlant}/>}/>
        </Routes>

    )
}
