import {ChangeEvent, useState} from "react";

type AddEmployeeProps = {}


export default function AddEmployee(props: AddEmployeeProps) {


    const [name, setName] = useState<string>("");

    function onNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    return (
        <div>
            <form>

                <input value={name} onChange={onNameChange}/>
                <button type="submit" onClick={}>Hinzufügen</button>
            </form>
        </div>
    )
}