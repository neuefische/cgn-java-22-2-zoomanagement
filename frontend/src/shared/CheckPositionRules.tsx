import Truck from "../truck/Truck";
import {PlantType} from "../plant/PlantType";
import Employee from "../employee/Employee";
import {Animal} from "../animal/Animal";
import {useEffect, useState} from "react";

type checkPositionRulesProps ={
    trucks:Truck[],
    plants:PlantType[],
    employees:Employee[],
    animals:Animal[],
}
export default function CheckPositionRules(props:checkPositionRulesProps){

const [missingPositionPlant,setMissingPositionPlant]=useState<PlantType[]>([]);

const addMissingPlant=(newPlant:PlantType)=>{
    setMissingPositionPlant(state=>[...state,newPlant])
}
const checkPositionPlant=(element :PlantType)=> {
    if (!element.position) {
        addMissingPlant(element)
    } else {
        if (element.position.x === null || element.position.y === null) {
            addMissingPlant(element)
        }
    }
}

useEffect(()=>{
    setMissingPositionPlant([]);
    props.plants.forEach(checkPositionPlant);
     },[props.plants]);

     return(
         <>
             <p>folgende Elemente haben keine Position:</p>
             <ul>
                 {missingPositionPlant.map((element) => <li>{element.name}</li>)
                 }
             </ul>
         </>
    )
}