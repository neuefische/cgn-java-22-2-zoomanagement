
import React, {} from "react";
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






    </>);
}