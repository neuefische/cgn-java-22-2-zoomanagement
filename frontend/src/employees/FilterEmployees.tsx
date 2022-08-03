type FilterEmployeesProps = {
    setFilterValue: (filterValue: string) => void;
}

export default function FilterEmployees(props: FilterEmployeesProps) {

    return (
        <form>
            <label htmlFor={"employeeSearch"}>Mitarbeiter Suche</label>
            <input id={"employeeSearch"} type={"text"} onChange={(event) => {
                props.setFilterValue(event.target.value);
            }}/>
        </form>
    )
}
