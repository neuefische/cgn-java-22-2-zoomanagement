import {useEffect, useState} from "react";
import Employee from "./Employee";
import axios from "axios";
import {NewEmployee} from "./NewEmployee";
import {showError} from "./ErrorEmployee";
import {useNavigate} from "react-router-dom";

export default function useEmployee() {

    const navigate = useNavigate();
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
        const newEmployee: NewEmployee = {name: newName, position: undefined}
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

    const updateEmployee = (updatedEmployee: Employee) => {
        return axios.put("/api/employees/" + updatedEmployee.id, updatedEmployee)
            .then(() => {
                    getAllEmployees();
                    navigate('/employees');
                }
            ).catch(error => showError(error));
    }

    return {
        deleteEmployee,
        addEmployee,
        employees,
        updateEmployee
    }
}
