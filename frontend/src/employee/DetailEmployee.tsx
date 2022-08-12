import Employee from "./Employee";
import {useParams} from "react-router-dom";
import {FormEvent, useEffect, useState} from "react";
import {showError} from "./ErrorEmployee";

type DetailEmployeesProps = {
    employees: Employee[],
    employeeUpdate: (employee: Employee) => void,
}

export default function DetailEmployee(props: DetailEmployeesProps) {
    const {id} = useParams();
    const [valueX, setValueX] = useState<string>("")
    const [valueY, setValueY] = useState<string>("")
    const employee: Employee | undefined = props.employees.find((e: Employee) => e.id === id);

    useEffect(() => {
        setValueX(employee?.position?.x || "");
        setValueY(employee?.position?.y || "")
        console.log(employee)
    }, [employee])


    const handleUpdate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (employee) {
            const updatedEmployee: Employee = {name: employee.name, id: employee.id, position: {x: valueX, y: valueY}};
            props.employeeUpdate(updatedEmployee);
        } else {
            showError("Not found");
        }
    }

    if (!employee) {
        return <>Mitarbeiter mit ID "{id}" leider nicht gefunden.</>;
    }

    return (<>

            <h2>{employee.name}</h2>
            <form onSubmit={handleUpdate}>
                <label htmlFor="xInput">X - Koordinate : <input id="xInput" type="text"
                                                                defaultValue={valueX}
                                                                onChange={(event) => {
                                                                    setValueX(event.target.value);
                                                                }}/></label>
                <label htmlFor="yInput">Y - Koordinate : <input id="yInput" type="text"
                                                                defaultValue={valueY}
                                                                onChange={(event) => {
                                                                    setValueY(event.target.value);
                                                                }}/></label>
                <button type={"submit"}>speichern</button>
            </form>

        </>
    )
}
