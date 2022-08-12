import {useEffect, useState} from "react";
import {PlantType} from "../plant/PlantType";
import Truck from "../truck/Truck";
import Employee from "../employee/Employee";
import {Animal} from "../animal/Animal";

type UseRulesProps = {
    employees: Employee[],
    animals: Animal[],
    trucks: Truck[],
    plants: PlantType[],
}

export default function useRules(employees: Employee[], animals: Animal[], trucks: Truck[], plants: PlantType[]) {
    const [missingPositionPlant, setMissingPositionPlant] = useState<PlantType[]>([]);

    const addMissingPlant = (newPlant: PlantType) => {
        setMissingPositionPlant(state => [...state, newPlant])
    }
    const checkPositionPlant = (element: PlantType) => {
        if (!element.position) {
            addMissingPlant(element)
        } else {
            if (element.position.x === null || element.position.y === null) {

                addMissingPlant(element)
            }
        }
    }

    useEffect(() => {
        setMissingPositionPlant([]);
        plants.forEach(checkPositionPlant);
    }, [plants]);

    return (
        missingPositionPlant
    )

}