package de.neuefische.cgnjava222.zoomanagement.zoo.employee.controller;


import de.neuefische.cgnjava222.zoomanagement.zoo.employee.model.Employee;
import de.neuefische.cgnjava222.zoomanagement.zoo.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping()
    public Employee postEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee.name());
    }


    @GetMapping(path = "/{id}")
    public Employee getEmployee(@PathVariable String id) {
        return employeeService.getEmployee(id);
    }
}

