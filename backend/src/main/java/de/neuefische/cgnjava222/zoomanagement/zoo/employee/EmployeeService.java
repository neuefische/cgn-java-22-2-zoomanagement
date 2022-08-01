package de.neuefische.cgnjava222.zoomanagement.zoo.employee;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {


    private final EmployeeRepo employeeRepo;

    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }


    public List<Employee> getAllEmployees() {
        return employeeRepo.findAll();
    }

    public Employee addEmployee(String name) {
        return employeeRepo.save(new Employee(name, getRandomId()));
    }


    public String getRandomId() {
        return UUID.randomUUID().toString();
    }

}
