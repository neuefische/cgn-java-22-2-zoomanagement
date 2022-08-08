import PlantList from "../plant/PlantList";
import TruckGallery from "../truck/TruckGallery";
import AnimalList from "../animal/AnimalList";
import Employees from "../employees/Employees";
import {ToastContainer} from "react-toastify";
import React from "react";
import {Animal} from "../animal/Animal";
import {Plant} from "../plant/Plant";
import Truck from "../truck/Truck";
import {Employee} from "../employees/Employee";

type HomeProps = {
    animalHook: {
        animals: Animal[],
        addAnimal: (animalName: string) => Promise<void>,
        onDeleteAnimal: (id: string) => Promise<void>,
    },
    plantHook: {
        plants: Plant[], addPlant: (name: string) => Promise<void>
    },
    truckHook: {
        trucks: Truck[], addTruck: (name: string) => Promise<void>
    },
    employeeHook: {
        deleteEmployee: (id: string) => Promise<void>, addEmployee: (newName: string) => Promise<any>, employees: Employee[]
    },
}
export default function Home(props: HomeProps) {

    return (<>
        <PlantList plants={props.plantHook.plants} addPlant={props.plantHook.addPlant}/>
        <TruckGallery trucks={props.truckHook.trucks} addTruck={props.truckHook.addTruck}/>
        <AnimalList animals={props.animalHook.animals} addAnimal={props.animalHook.addAnimal}
                    onDeleteAnimal={props.animalHook.onDeleteAnimal}/>
        <Employees employees={props.employeeHook.employees} addEmployee={props.employeeHook.addEmployee}
                   onDeleteEmployee={props.employeeHook.deleteEmployee}/>
        <ToastContainer/>
    </>);
}
