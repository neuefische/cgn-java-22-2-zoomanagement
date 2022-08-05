import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import DetailPlant from "../plant/DetailPlant";

export default function AllRoutes({...props}){
    return (
        <Routes>
        <Route path={"/"} element={<Home animals={props.animals} addAnimal={props.addAnimal}
                                         onDeleteAnimal={props.onDeleteAnimal}
                                         plants={props.plants} addPlant={props.addPlant} deletePlant={props.deletePlant}
                                         trucks={props.trucks} addTruck={props.addTruck}
                                         employees={props.employees} addEmployee={props.addEmployee}
                                         deleteEmployee={props.deleteEmployee}/>}/>
        <Route path={"plants/:id"} element={<DetailPlant plants={props.plants}/>}/>
    </Routes>)
}