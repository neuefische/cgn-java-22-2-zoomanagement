import {Employee} from "./Employee";
import AddEmployee from "./AddEmployee";
import {useState} from "react";
import FilterEmployees from "./FilterEmployees";

type EmployeesProps = {
    employees: Employee[],
    addEmployee: (name: string) => Promise<Employee>
}

export default function Employees(props: EmployeesProps) {

    const [filterValue, setFilterValue] = useState<string>("");

    return (
        <div>
            <h2>Mitarbeiter</h2>
            <FilterEmployees setFilterValue={setFilterValue}/>
            <ul>
                {props.employees
                    .filter((employee) => {
                        const checkParam = employee.name;
                        return checkParam.toLowerCase().includes(filterValue.toLowerCase())
                    })
                    .map((employee) => <li key={employee.id}> {employee.name} </li>)}
            </ul>
            <AddEmployee addEmployee={props.addEmployee}/>
        </div>
    )
}
