import {Employee} from "./Employee";
import AddEmployee from "./AddEmployee";

type EmployeesProps = {
    employees: Employee[],
    addEmployee: (name: string) => Promise<Employee>
}

export default function Employees(props: EmployeesProps) {

    return (
        <div>
            <h2>Mitarbeiter</h2>
            <AddEmployee addEmployee={props.addEmployee}/>
            <ul>
                {props.employees.map((employee) => <li key={employee.id}> {employee.name} </li>)}
            </ul>
        </div>
    )
}
