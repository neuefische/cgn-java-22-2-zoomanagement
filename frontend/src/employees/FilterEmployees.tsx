import {ChangeEvent} from "react";

type FilterEmployeesProps = {
    setFilterValue: (filterValue: string) => void;
    setRadioValue: (radioValue: string) => void;
}

export default function FilterEmployees(props: FilterEmployeesProps) {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.setRadioValue(event.target.value)
    }

    return (
        <form>
            <label htmlFor={"employeeSearch"}>Mitarbeiter Suche</label>
            <input id={"employeeSearch"} type={"text"} onChange={(event) => {
                props.setFilterValue(event.target.value);
            }}/>
            <fieldset>
                <input id={"radioAll"} type={"radio"} name={"employeeRadio"} value={"all"} defaultChecked
                       onChange={handleChange}/>
                <label htmlFor={"radioAll"}>alle</label>
                <input id={"radioName"} type={"radio"} name={"employeeRadio"} value={"name"} onChange={handleChange}/>
                <label htmlFor={"radioName"}>Name</label>
                <input id={"radioID"} type={"radio"} name={"employeeRadio"} value={"id"} onChange={handleChange}/>
                <label htmlFor={"radioID"}>ID</label>
            </fieldset>
        </form>

    )
}
