import {Employee} from "./Employee";
import {useParams} from "react-router-dom";
import {useState} from "react";

type DetailEmployeesProps = {
    employees: Employee[],
    employeeUpdate: (employee: Employee) => void,
}
export default function DetailEmployee(props: DetailEmployeesProps) {
    const {id} = useParams();
    const [valueX, setValueX] = useState<string>("")
    const [valueY, setValueY] = useState<string>("")

    const employee: Employee | undefined = props.employees.find((e: Employee) => e.id === id);

    const handleUpdate = () => {
        if (employee) {
            const updatedEmployee: Employee = {name: employee.name, id: employee.id, position: {x: valueX, y: valueY}};
            props.employeeUpdate(updatedEmployee);
        }

    }

    return (<>
            <h2>{employee?.name}</h2>
            <form>
                <label htmlFor="xInput">X - Koordinate : <input id="xInput" type="text"
                                                                onChange={(event) => {
                                                                    setValueX(event.target.value);
                                                                }}/></label>
                <label htmlFor="yInput">Y - Koordinate : <input id="yInput" type="text"
                                                                onChange={(event) => {
                                                                    setValueY(event.target.value);
                                                                }}/></label>
                <button type={"submit"} onClick={handleUpdate}>speichern</button>
            </form>
        </>
    )
}