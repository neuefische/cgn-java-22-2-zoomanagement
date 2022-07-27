import {useEffect, useState} from "react";
import {Employee} from "../model/Employee";
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
    return {
        employees, getAllEmployees

    }
}