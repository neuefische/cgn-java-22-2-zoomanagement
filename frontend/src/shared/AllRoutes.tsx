import DetailPlant from "../plant/DetailPlant";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import useAnimals from "../animal/useAnimals";
import usePlants from "../plant/usePlants";
import useTrucks from "../truck/useTrucks";
import useEmployee from "../employee/useEmployee";
import Login from "./LogIn";
import Signup from "./Signup";
import useMe from "./useMe";
import useLogin from "./useLogin";

export default function AllRoutes() {

    let animalHook = useAnimals();
    let plantHook = usePlants();
    const truckHook = useTrucks();
    const employeeHook = useEmployee();
    const meHook = useMe();
    const loginHook = useLogin();

    const [username, setUsername] = useState(meHook.me)
    // const [animals,setAnimals]=useState(animalHook.animals)
    // const [plants,setPlants]=useState(plantHook.plants)
    // const [trucks,setTrucks]=useState(truckHook.trucks)
    // const [employees,setEmployees]=useState(employeeHook.employees)

    useEffect(() => {
        setUsername(meHook.me)
        if (meHook.me !== "anonymousUser") {
            animalHook.getAnimalList()
            plantHook.getAllPlants()
            truckHook.getAllTrucks()
            employeeHook.getAllEmployees()
        }

    }, [meHook.me, plantHook.plants])

    return (
        <>
            {
                !username
                    ? "Lade..."
                    : (
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
                                        <Route path={"/plant/:id"}
                                               element={<DetailPlant plants={plantHook.plants}
                                                                     updatePlant={plantHook.updatePlant}/>}/>
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

