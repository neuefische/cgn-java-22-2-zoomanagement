package de.neuefische.cgnjava222.zoomanagement.zoo.employee;

import org.springframework.http.HttpStatus;
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
    @ResponseStatus(code = HttpStatus.CREATED)
    public Employee addEmployee(@RequestBody NewEmployee newEmployee) {
        return employeeService.addEmployee(newEmployee);
    }
}
