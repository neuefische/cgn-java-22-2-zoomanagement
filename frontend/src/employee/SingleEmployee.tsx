import Employee from "./Employee";
import {useNavigate} from "react-router-dom"


type SingleEmployeesProps = {
    employee: Employee,
    onDeleteEmployee: (id: string) => Promise<void>,
}

export default function SingleEmployee(props: SingleEmployeesProps) {

    const navigate = useNavigate();

    const handleClickDelete = () => {
        props.onDeleteEmployee(props.employee.id);
    }

    return (
        <>
            {props.employee.name}
            <button type={"button"} onClick={handleClickDelete}>löschen</button>
            <button type={"button"} onClick={() => navigate('/employees/' + props.employee.id)}>Details</button>
        </>
    );
}