package de.neuefische.cgnjava222.zoomanagement.zoo.employee.controller;


import de.neuefische.cgnjava222.zoomanagement.zoo.employee.model.Employee;
import de.neuefische.cgnjava222.zoomanagement.zoo.service.EmployeeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }


    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getListEmployees();

    }


}
