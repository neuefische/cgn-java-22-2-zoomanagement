import DetailEmployee from "../employees/DetailEmployee";
import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./Home";
import useAnimals from "../animal/useAnimals";
import usePlants from "../plant/usePlants";
import useTrucks from "../truck/useTrucks";
import useEmployee from "../employees/useEmployee";
import AnimalList from "../animal/AnimalList";
import Employees from "../employees/Employees";
import TruckGallery from "../truck/TruckGallery";
import PlantList from "../plant/PlantList";

export default function AllRoutes() {

    const animalHook = useAnimals();
    const plantHook = usePlants();
    const truckHook = useTrucks();
    const employeeHook = useEmployee();

    return (
        <>

        <Routes>
            <Route path={"/"} element={<Home animalHook={animalHook}
                                             plantHook={plantHook}
                                             truckHook={truckHook}
                                             employeeHook={employeeHook}
            />}/>
            <Route path={"/employees/:id"} element={<DetailEmployee
                employees={employeeHook.employees}
                employeeUpdate={employeeHook.updateEmployee}/>}/>

            <Route path={"/animals"} element={<AnimalList animals={animalHook.animals}
                                                          addAnimal={animalHook.addAnimal}
                                                          onDeleteAnimal={animalHook.onDeleteAnimal}/>}/>
            <Route path={"/employees"}
                   element={<Employees employees={employeeHook.employees}
                                       addEmployee={employeeHook.addEmployee}
                                       onDeleteEmployee={employeeHook.deleteEmployee}/>}/>
            <Route path={"/trucks"} element={<TruckGallery trucks={truckHook.trucks}
                                                           addTruck={truckHook.addTruck}/>}/>
            <Route path={"/plants"} element={<PlantList plants={plantHook.plants}
                                                        addPlant={plantHook.addPlant}/>}/>

        </Routes>


</>
    )
}