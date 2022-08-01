package de.neuefische.cgnjava222.zoomanagement.zoo.employee;


import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

