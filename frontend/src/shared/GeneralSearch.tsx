import {ChangeEvent} from "react";

type FilterProps = {
    setFilterValue: (filterValue: string) => void;
    setRadioValue: (radioValue: string) => void;
}

export default function GeneralSearch(props: FilterProps) {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.setRadioValue(event.target.value)
    }

    return (
        <form>
            <label htmlFor={"itemSearch"}>Suche</label>
            <input id={"itemSearch"} type={"text"} onChange={(event) => {
                props.setFilterValue(event.target.value);
            }}/>
            <fieldset>
                <input id={"radioAll"} type={"radio"} name={"employeeRadio"} value={"all"} defaultChecked
                       onChange={handleChange}/>
                <label htmlFor={"radioAll"}>Name und/oder ID</label>
                <input id={"radioName"} type={"radio"} name={"employeeRadio"} value={"name"} onChange={handleChange}/>
                <label htmlFor={"radioName"}>Name</label>
                <input id={"radioID"} type={"radio"} name={"employeeRadio"} value={"id"} onChange={handleChange}/>
                <label htmlFor={"radioID"}>ID</label>
            </fieldset>
        </form>

    )
}
