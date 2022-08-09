import {Employee} from "./Employee";
import {useNavigate} from "react-router-dom";



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
            <div className={"nameStyle"}>{props.employee.name}</div>
            <button type={"button"} onClick={handleClickDelete}><img src={"../pictures/trash.png"}/></button>
            <button type={"button"} onClick={() => navigate('/employees/' + props.employee.id)}><img src={"../pictures/details.png"}/></button>
        </>
    );
}