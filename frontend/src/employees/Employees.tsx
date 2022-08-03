import {Employee} from "./Employee";
import AddEmployee from "./AddEmployee";
import SingleEmployee from "./SingleEmployee";

type EmployeesProps = {
    employees: Employee[],
    addEmployee: (name: string) => Promise<Employee>,
    onDeleteEmployee: (id: string) => Promise<void>,
}


export default function Employees(props: EmployeesProps) {

    return(


        <div>
            <h2>Mitarbeiter</h2>
            <AddEmployee addEmployee={props.addEmployee}/>
            <ul>
                {props.employees.map((employee) => <li key={employee.id}><SingleEmployee employee={employee}
                                                                                         onDeleteEmployee={props.onDeleteEmployee}/>
                </li>)}
            </ul>
        </div>

    )
}
