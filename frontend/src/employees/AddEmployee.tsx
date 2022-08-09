import {ChangeEvent, FormEvent, useState} from "react";
import {Employee} from "./Employee";
import {showError} from "./ErrorEmployee";

type AddEmployeeProps = {
    addEmployee: (name: string) => Promise<Employee>
}

export default function AddEmployee(props: AddEmployeeProps) {
    const [name, setName] = useState<string>("");
    function onNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    const onEmployeeSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!name) {
            console.error("Name must not be empty")
        } else {
            props.addEmployee(name).then(() => setName("")).catch((error) => showError(error));
        }
    }

    return (
        <div>
            <form className="form" onSubmit={onEmployeeSubmit}>
                <input value={name} onChange={onNameChange}/>
                <button><img src={"../pictures/save.png"} alt={"hinzufügen"}/></button>
            </form>
        </div>
    )
}
