import {Employee} from "./Employee";
import AddEmployee from "./AddEmployee";
import {useState} from "react";
import GeneralSearch from "../shared/GeneralSearch";
import SingleEmployee from "./SingleEmployee";
import {filterGeneral} from "../shared/helpers";

type EmployeesProps = {
    employees: Employee[],
    addEmployee: (name: string) => Promise<Employee>,
    onDeleteEmployee: (id: string) => Promise<void>,
}


export default function Employees(props: EmployeesProps) {

    const [filterValue, setFilterValue] = useState<string>("");
    const [radioValue, setRadioValue] = useState<string>("all");
    const objectList = props.employees;

    return (

        <div>
            <h2>Mitarbeiter</h2>
            <GeneralSearch setFilterValue={setFilterValue} setRadioValue={setRadioValue}/>
            <ul>
                {filterGeneral(filterValue, radioValue, objectList)
                    .map((employee) => <li key={employee.id}><SingleEmployee employee={employee}
                                                                             onDeleteEmployee={props.onDeleteEmployee}/>
                    </li>)}
            </ul>
            <AddEmployee addEmployee={props.addEmployee}/>
        </div>

    )
}
