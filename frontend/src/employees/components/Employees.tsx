import {Employee} from "../model/Employee";

type ShowEmployeesProps = {
    employees: Employee[],
}

export default function Employees(props: ShowEmployeesProps) {


    return (
        <div>
            <h2>Mitarbeiter</h2>
            <ul>
                {props.employees.map((employee) => <li>{employee.name}</li>)}
            </ul>

        </div>
    )


}