package de.neuefische.cgnjava222.zoomanagement.zoo.employee.controller;


import de.neuefische.cgnjava222.zoomanagement.zoo.employee.model.Employee;
import de.neuefische.cgnjava222.zoomanagement.zoo.employee.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

   private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }


    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();

    }

    @PostMapping()
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee.name());

    }


}

