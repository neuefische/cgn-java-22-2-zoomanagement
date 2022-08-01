import {useEffect, useState} from "react";
import {Employee} from "./Employee";
import axios from "axios";
import {NewEmployee} from "./NewEmployee";

export default function useEmployee() {

    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        getAllEmployees()
    }, [])

    const getAllEmployees = () => {
        axios.get("/api/employees")
            .then((response) => response.data)
            .then(setEmployees)
    }

    const addEmployee = (newName: string) => {
        const newEmployee: NewEmployee = {name: newName}
        return axios.post("/api/employees", newEmployee)
            .then((response) => {
                    getAllEmployees()
                    return response.data
                }
            );
    }

    return {
        addEmployee,
        employees,
    }
}
