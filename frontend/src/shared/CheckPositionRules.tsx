import Truck from "../truck/Truck";
import {PlantType} from "../plant/PlantType";
import Employee from "../employee/Employee";
import {Animal} from "../animal/Animal";
import useRules from "../rules/useRules";

type checkPositionRulesProps = {
    employees: Employee[],
    animals: Animal[],
    trucks: Truck[],
    plants: PlantType[],
    missingPositionPlant: PlantType[],
}
export default function CheckPositionRules(props:checkPositionRulesProps){

    useRules(props.employees, props.animals, props.trucks, props.plants)



     return (

         <>
             <p>folgende Elemente haben keine Position:</p>
             <ul>  {props.missingPositionPlant.map((element) => <li>{element.name}</li>)
             }
             </ul>
         </>
     )
}

//<useRules employees={props.employees}
//             animals={props.animals}
//             trucks={props.trucks}
//             plants={props.plants}/>