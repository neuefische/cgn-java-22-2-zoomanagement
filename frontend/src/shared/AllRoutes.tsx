import DetailEmployee from "../employees/DetailEmployee";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import FoodTruckDetail from "../truck/FoodTruckDetail";

export default function AllRoutes({...props}) {

    return (

        <Routes>
            <Route path={"/"} element={<Home animals={props.animals} addAnimal={props.addAnimal}
                                             onDeleteAnimal={props.onDeleteAnimal}
                                             plants={props.plants} addPlant={props.addPlant}
                                             trucks={props.trucks} addTruck={props.addTruck}
                                             deleteTruck={props.deleteTruck}
                                             employees={props.employees} addEmployee={props.addEmployee}
                                             deleteEmployee={props.deleteEmployee}/>}/>
            <Route path={"trucks/:id"} element={<FoodTruckDetail trucks={props.trucks}
            />}/>
            <Route path={"employees/:id"} element={<DetailEmployee employees={props.employees}/>}/>
        </Routes>

    )
}