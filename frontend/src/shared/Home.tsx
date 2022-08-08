import PlantList from "../plant/PlantList";
import TruckGallery from "../truck/TruckGallery";
import AnimalList from "../animal/AnimalList";
import Employees from "../employees/Employees";
import {ToastContainer} from "react-toastify";
import React from "react";
import {Animal} from "../animal/Animal";

import Truck from "../truck/Truck";
import {Employee} from "../employees/Employee";
import {PlantType, PositionType} from "../plant/PlantType";

type HomeProps = {
    animalHook: {
        animals: Animal[],
        addAnimal: (animalName: string) => Promise<void>,
        onDeleteAnimal: (id: string) => Promise<void>,
    },
    plantHook: {
        plants: PlantType[],
        addPlant: (name: string) => Promise<void>,
        deletePlant: (id: string) => Promise<void>,

    },
    truckHook: {
        trucks: Truck[], addTruck: (name: string) => Promise<void>
    },
    employeeHook: {
        deleteEmployee: (id: string) => Promise<void>, addEmployee: (newName: string) => Promise<any>, employees: Employee[]
    },
}
export default function Home(props:HomeProps) {

    return (
        <>
        <PlantList plants={props.plantHook.plants} addPlant={props.plantHook.addPlant}  deletePlant={props.plantHook.deletePlant}/>
        <TruckGallery trucks={props.truckHook.trucks} addTruck={props.truckHook.addTruck}/>
        <AnimalList animals={props.animalHook.animals} addAnimal={props.animalHook.addAnimal}
                    onDeleteAnimal={props.animalHook.onDeleteAnimal}/>
        <Employees employees={props.employeeHook.employees} addEmployee={props.employeeHook.addEmployee}
                   onDeleteEmployee={props.employeeHook.deleteEmployee}/>
        <ToastContainer/>
    </>);
}