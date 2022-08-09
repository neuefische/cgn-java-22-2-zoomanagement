import {useEffect, useState} from "react";
import Employee from "./Employee";
import axios from "axios";
import {NewEmployee} from "./NewEmployee";
import {showError} from "./ErrorEmployee";

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

    const deleteEmployee = (id: string) => {
        return axios.delete("/api/employees/" + id)
            .then((response) => response.status)
            .then(getAllEmployees)
            .catch(error => showError(error));
    }

    return {
        deleteEmployee,
        addEmployee,
        employees,
    }
}