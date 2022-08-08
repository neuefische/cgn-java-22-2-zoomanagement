import {Employee} from "./Employee";
import AddEmployee from "./AddEmployee";
import {useState} from "react";
import GeneralSearch from "../shared/GeneralSearch";
import SingleEmployee from "./SingleEmployee";

type EmployeesProps = {
    employees: Employee[],
    addEmployee: (name: string) => Promise<Employee>,
    onDeleteEmployee: (id: string) => Promise<void>,
}


export default function Employees(props: EmployeesProps) {

    const [filterValue, setFilterValue] = useState<string>("");
    const [radioValue, setRadioValue] = useState<string>("all");

    return (

        <div>
            <h2>Mitarbeiter</h2>
            <GeneralSearch setFilterValue={setFilterValue} setRadioValue={setRadioValue}/>
            <ul>
                {props.employees
                    .filter((employee) => {
                        let checkParam: string;
                        switch (radioValue) {
                            case "name": {
                                checkParam = employee.name;
                                break;
                            }
                            case "id": {
                                checkParam = employee.id;
                                break;
                            }
                            default: {
                                checkParam = employee.name + employee.id;
                            }
                        }
                        return checkParam.toLowerCase().includes(filterValue.toLowerCase())
                    })
                    .map((employee) => <li key={employee.id}><SingleEmployee employee={employee}
                                                                             onDeleteEmployee={props.onDeleteEmployee}/>
                    </li>)}
            </ul>
            <AddEmployee addEmployee={props.addEmployee}/>
        </div>

    )
}
