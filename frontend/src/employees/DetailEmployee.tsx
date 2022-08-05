import {Employee} from "./Employee";
import {useParams} from "react-router-dom";

export default function DetailEmployee({...props}) {
    const {id} = useParams();
    let employee: Employee;
    employee = props.employees.find((e: Employee) => e.id === id)


    return (<>
            <h2>{employee.name}</h2>
            <form>
                <label htmlFor="xInput">X - Koordinate : <input id="xInput" type="text" value={0}/></label>
                <label htmlFor="yInput">Y - Koordinate : <input id="yInput" type="text" value={0}/></label>
                <button type={"submit"}>speichern</button>
            </form>
        </>
    )
}