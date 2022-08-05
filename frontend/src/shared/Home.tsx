import PlantList from "../plant/PlantList";
import TruckGallery from "../truck/TruckGallery";
import AnimalList from "../animal/AnimalList";
import Employees from "../employees/Employees";
import {ToastContainer} from "react-toastify";
import React from "react";

export default function Home({...props}) {

    return (<>
        <PlantList plants={props.plants} addPlant={props.addPlant}/>
        <TruckGallery trucks={props.trucks} addTruck={props.addTruck} getTruckById={props.getTruckById}
                      deleteTruck={props.deleteTruck}/>
        <AnimalList animals={props.animals} addAnimal={props.addAnimal} onDeleteAnimal={props.onDeleteAnimal}/>
        <Employees employees={props.employees} addEmployee={props.addEmployee} onDeleteEmployee={props.deleteEmployee}/>
        <ToastContainer/>
    </>);
}