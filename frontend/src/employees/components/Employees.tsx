import {Employee} from "../model/Employee";

type EmployeesProps = {
    employees: Employee[],
}

export default function Employees(props: EmployeesProps) {


    return (
        <div>
            <h2>Mitarbeiter</h2>

            <ul>
                {props.employees.map((employee) => <li key={employee.id}> {employee.name} </li>)}
            </ul>

        </div>
    )


}