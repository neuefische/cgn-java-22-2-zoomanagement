import PlantList from "../plant/PlantList";
import TruckGallery from "../truck/TruckGallery";
import AnimalList from "../animal/AnimalList";
import Employees from "../employee/Employees";
import React from "react";
import {Animal} from "../animal/Animal";
import {Truck} from "../truck/Truck";
import Employee from "../employee/Employee";
import {PlantType} from "../plant/PlantType";
import GameButton from "./GameButton";

type HomeProps = {
    animalHook: {
        animals: Animal[],
        addAnimal: (animalName: string) => Promise<void>,
        onDeleteAnimal: (id: string) => Promise<void>,
        apiAnimals: string[],
    },
    plantHook: {
        plants: PlantType[],
        addPlant: (name: string) => Promise<void>,
        deletePlant: (id: string) => Promise<void>,
        apiPlants: string[],
    },

    truckHook: {
        trucks: Truck[],
        addTruck: (name: string) => Promise<any>,
        deleteTruck: (id: string) => Promise<void>,
        getTruckById: (id: string) => Truck | undefined,
        updateTruck: (truck: Truck) => Promise<void>,
    },
    employeeHook: {
        deleteEmployee: (id: string) => Promise<void>,
        addEmployee: (newName: string) => Promise<any>,
        employees: Employee[]
    },
}

export default function Home(props: HomeProps) {


    return (
        <>
            <PlantList plants={props.plantHook.plants} addPlant={props.plantHook.addPlant}
                       deletePlant={props.plantHook.deletePlant} apiPlants={props.plantHook.apiPlants}/>
            <TruckGallery trucks={props.truckHook.trucks} addTruck={props.truckHook.addTruck}
                          deleteTruck={props.truckHook.deleteTruck} getTruckById={props.truckHook.getTruckById}
                          updateTruck={props.truckHook.updateTruck}/>
            <AnimalList animals={props.animalHook.animals} addAnimal={props.animalHook.addAnimal}
                        onDeleteAnimal={props.animalHook.onDeleteAnimal} apiAnimals={props.animalHook.apiAnimals}/>
            <Employees employees={props.employeeHook.employees} addEmployee={props.employeeHook.addEmployee}
                       onDeleteEmployee={props.employeeHook.deleteEmployee}/>

            <GameButton/>
        </>);
}
