import {Animal} from "../animal/Animal";
import {PlantType} from "../plant/PlantType";
import Employee from "../employee/Employee";
import Truck from "../truck/Truck";

export function filterGeneral(filterValue: string,
                              radioValue: string,
                              objectList: Animal[] | PlantType[] | Employee[] | Truck[]) {

    const returnArray: Animal[] | PlantType[] | Employee[] | Truck[] = [];

    objectList.forEach((item: Animal | PlantType | Employee | Truck) => {
        const searchParam: string[] = [];

        switch (radioValue) {
            case "name": {
                searchParam.push(item.name.toLowerCase());
                break;
            }
            case "id": {
                searchParam.push(item.id.toLowerCase());
                break;
            }
            case "all": {
                searchParam.push(item.name.toLowerCase(), item.id.toLowerCase());
                break;
            }
        }

        for (const param of searchParam) {
            if (param.includes(filterValue.toLowerCase())) {
                returnArray.push(item);
                break;
            }
        }
    })

    return returnArray;
}

