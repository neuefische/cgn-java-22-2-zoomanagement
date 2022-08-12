import Employee from "./Employee";


type SingleEmployeesProps = {
    employee: Employee,
    onDeleteEmployee: (id: string) => Promise<void>,
}

export default function SingleEmployee(props: SingleEmployeesProps) {
    const handleClick = () => {
        props.onDeleteEmployee(props.employee.id);
    }

    return (
        <>
            {props.employee.name}
            <button type={"button"} onClick={handleClick}>löschen</button>
        </>
    );
}