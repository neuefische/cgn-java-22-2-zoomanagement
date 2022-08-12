import DetailPlant from "../plant/DetailPlant";
import React, {useEffect, useState} from "react";
import DetailEmployee from "../employee/DetailEmployee";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import useAnimals from "../animal/useAnimals";
import usePlants from "../plant/usePlants";
import useTrucks from "../truck/useTrucks";
import AnimalDetails from "../animal/AnimalDetails";
import useEmployee from "../employee/useEmployee";
import Login from "./LogIn";
import Signup from "./Signup";
import useMe from "./useMe";
import useLogin from "./useLogin";
import AnimalList from "../animal/AnimalList";
import Employees from "../employee/Employees";
import TruckGallery from "../truck/TruckGallery";
import PlantList from "../plant/PlantList";

export default function AllRoutes() {

    const animalHook = useAnimals();
    const plantHook = usePlants();
    const truckHook = useTrucks();
    const employeeHook = useEmployee();
    const meHook = useMe();
    const loginHook = useLogin();

    const [username, setUsername] = useState(meHook.me)

    useEffect(() => {
        setUsername(meHook.me)
        if (meHook.me !== "anonymousUser") {
            animalHook.getAnimalList()
            plantHook.getAllPlants()
            truckHook.fetchAllTrucks()
            employeeHook.getAllEmployees()
        }

    }, [meHook.me, plantHook.plants])

    return (
        <>
            {
                !username
                    ? "Lade..."
                    :(
                        (username !== "anonymousUser") ?
                            (
                                <>
                                    <h1>Hallo {username}</h1>
                                    <button onClick={meHook.logout}>logout</button>

                                    <Routes>
                                        <Route path={"/"} element={<Home animalHook={animalHook}
                                                                         truckHook={truckHook}
                                                                         employeeHook={employeeHook}
                                                                         plantHook={plantHook}/>}/>
                                        <Route path={"/animals/:id"}
                                               element={<AnimalDetails animal={animalHook.animals} onPlaceAnimal={animalHook.onPlaceAnimal}/>}/>
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
                                                                                       deleteTruck={truckHook.deleteTrucks}/>}/>
                                        <Route path={"/plants"} element={<PlantList plants={plantHook.plants}
                                                                                    addPlant={plantHook.addPlant}
                                                                                    deletePlant={plantHook.deletePlant}
                                                                                    apiPlants={plantHook.apiPlants}/>}/>

                                    </Routes>
                                </>
                            )
                            : (
                                <Routes>
                                    <Route path={"/"} element={
                                        <Login login={loginHook.login} setMe={meHook.setMe}/>
                                    }/>
                                    <Route path={"/signup"} element={<Signup/>}/>
                                </Routes>
                            )
                    )
            }
        </>
    )
}

