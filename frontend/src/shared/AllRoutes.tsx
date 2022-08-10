import DetailPlant from "../plant/DetailPlant";
import DetailEmployee from "../employees/DetailEmployee";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import useAnimals from "../animal/useAnimals";
import usePlants from "../plant/usePlants";
import useTrucks from "../truck/useTrucks";
import useEmployee from "../employee/useEmployee";

export default function AllRoutes() {

    const animalHook = useAnimals();
    const plantHook = usePlants();
    const truckHook = useTrucks();
    const employeeHook = useEmployee();

    return (

        <Routes>
            <Route path={"/"} element={<Home animalHook={animalHook}

                                             truckHook={truckHook}
                                             employeeHook={employeeHook}
                                             plantHook={plantHook}/>}/>
            <Route path={"/plant/:id"}
                   element={<DetailPlant plants={plantHook.plants} updatePlant={plantHook.updatePlant}/>}/>
            <Route path={"/employees/:id"}
                   element={<DetailEmployee employees={employeeHook.employees}
                                            employeeUpdate={employeeHook.updateEmployee}/>}/>

        </Routes>

    )
}
