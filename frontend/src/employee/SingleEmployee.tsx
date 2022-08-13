import Employee from "./Employee";

type SingleEmployeesProps = {
    employee: Employee,
    onDeleteEmployee: (id: string) => Promise<void>,
}

export default function SingleEmployee(props: SingleEmployeesProps) {

    const handleClickDelete = () => {
        props.onDeleteEmployee(props.employee.id);
    }

    return (
        <>
            <div className={"nameStyle"}>{props.employee.name}</div>
            <button type={"button"} onClick={handleClickDelete}><img src={"../pictures/trash.png"} alt={"Delete"}/></button>
        </>
    );
}
