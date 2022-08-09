import {Animal} from "../animal/Animal";
import {Plant} from "../plant/Plant";
import {Employee} from "../employees/Employee";
import Truck from "../truck/Truck";

export function filterGeneral(filterValue: string, radioValue: string,
                              objectList: Animal[] | Plant[] | Employee[] | Truck[]) {

    const returnArray: Animal[] | Plant[] | Employee[] | Truck[] = [];

    objectList.forEach((item: Animal | Plant | Employee | Truck) => {
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

