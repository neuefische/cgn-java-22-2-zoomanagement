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
    console.log(element);

     if(!element.position){
         console.log("keine Position")
          addMissingPlant(element)}
     else{
         if(element.position.x===null||element.position.y===null){
             console.log("keine Position")
              addMissingPlant(element)}
         else{

         console.log("mit Position");
     }}}


useEffect(()=>{
    console.log("props.plants");
    console.log(props.plants);
    setMissingPositionPlant([]);
    props.plants.forEach(checkPositionPlant);
     },[props.plants]);

     return(
        <>
        <p>folgende Elemente haben keine Position:</p>
            {missingPositionPlant.map(( element)=>element.name )
             }
        </>
    )
}