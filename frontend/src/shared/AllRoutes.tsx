import DetailPlant from "../plant/DetailPlant";
import DetailEmployee from "../employee/DetailEmployee";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import useAnimals from "../animal/useAnimals";
import usePlants from "../plant/usePlants";
import useTrucks from "../truck/useTrucks";
import AnimalDetails from "../animal/AnimalDetails";
import useEmployee from "../employee/useEmployee";
import FoodTruckDetail from "../truck/FoodTruckDetail";
import ZooGame from "./ZooGame";
import AnimalList from "../animal/AnimalList";
import Employees from "../employee/Employees";
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
                                                 truckHook={truckHook}
                                                 employeeHook={employeeHook}
                                                 plantHook={plantHook}/>}/>
                <Route path={"/animals/:id"}
                       element={<AnimalDetails animal={animalHook.animals} onPlaceAnimal={animalHook.onPlaceAnimal} onAddEmoji={animalHook.onAddEmoji}/>}/>
                <Route path={"/plant/:id"}
                       element={<DetailPlant plants={plantHook.plants} updatePlant={plantHook.updatePlant}/>}/>
                <Route path={"/employees/:id"}
                       element={<DetailEmployee employees={employeeHook.employees}
                                                employeeUpdate={employeeHook.updateEmployee}/>}/>


                <Route path={"/animals"} element={<AnimalList animals={animalHook.animals}
                                                              addAnimal={animalHook.addAnimal}
                                                              onDeleteAnimal={animalHook.onDeleteAnimal}
                                                              apiAnimals={animalHook.apiAnimals}/>}/>
                <Route path={"/employees"}
                       element={<Employees employees={employeeHook.employees}
                                           addEmployee={employeeHook.addEmployee}
                                           onDeleteEmployee={employeeHook.deleteEmployee}/>}/>
                <Route path={"/trucks"} element={<TruckGallery trucks={truckHook.trucks}
                                                               addTruck={truckHook.addTruck}
                                                               deleteTruck={truckHook.deleteTruck}
                                                               getTruckById={truckHook.getTruckById}
                                                               updateTruck={truckHook.updateTruck}/>}/>
                <Route path={"/plants"} element={<PlantList plants={plantHook.plants}
                                                            addPlant={plantHook.addPlant}
                                                            deletePlant={plantHook.deletePlant}
                                                            apiPlants={plantHook.apiPlants}/>}/>
                <Route path={"/trucks/:id"} element={<FoodTruckDetail
                    trucks={truckHook.trucks} getTruckById={truckHook.getTruckById} updateTruck={truckHook.updateTruck}
                />}/>
                <Route path={"/zooGame"} element={<ZooGame/>}/>

            </Routes>
        </>
    )
}
