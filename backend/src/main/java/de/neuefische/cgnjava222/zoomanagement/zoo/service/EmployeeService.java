package de.neuefische.cgnjava222.zoomanagement.zoo.service;

import de.neuefische.cgnjava222.zoomanagement.zoo.employee.model.Employee;
import de.neuefische.cgnjava222.zoomanagement.zoo.employee.repository.EmployeeRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {


        EmployeeRepo employeeRepo;

        public EmployeeService(EmployeeRepo employeeRepo) {
                this.employeeRepo = employeeRepo;
        }

        public Employee getEmployee(String id) {
                return employeeRepo.getEmployee(id);
        }

        public List<Employee> getListEmployees() {
                return employeeRepo.listEmployees();
        }

        public Employee addEmployee(String name) {
                return employeeRepo.addEmployee(name);
        }


}
