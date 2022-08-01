import {useEffect, useState} from "react";
import {Employee} from "./Employee";
import axios from "axios";

export default function useEmployee() {

    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        getAllEmployees()
    }, [])

    const getAllEmployees = () => {
        axios.get("/api/employees/")
            .then((response) => response.data)
            .then(setEmployees)
    }

    const addEmployee = (newName: string) => {
        const newEmployee = {name: newName}
        return axios.post("/api/employees/", newEmployee)
            .then((response) => {
                getAllEmployees()
                return response.data
            });
    }
    return {
        addEmployee,
        employees,
    }
}