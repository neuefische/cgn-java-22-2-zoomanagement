package de.neuefische.cgnjava222.zoomanagement.zoo.employee;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {


    private final EmployeeRepo employeeRepo;

    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }


    public List<Employee> getAllEmployees() {
        return employeeRepo.findAll();
    }


}
