package de.neuefische.cgnjava222.zoomanagement.zoo.employee.repository;

import de.neuefische.cgnjava222.zoomanagement.zoo.employee.model.Employee;
import org.springframework.stereotype.Repository;

import java.util.*;


@Repository
public class EmployeeRepo {


    private final Map<String, Employee> employees = new HashMap<>();


    public Map<String, Employee> getEmployees() {
        return employees;
    }

    public List<Employee> listEmployees() {
        return new ArrayList<>(employees.values());
    }


    public Employee getEmployee(String id) {
        return employees.get(id);
    }

    @Override
    public String toString() {
        return "EmployeeRepo{" +
                "employees=" + employees +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmployeeRepo that = (EmployeeRepo) o;
        return Objects.equals(employees, that.employees);
    }

    @Override
    public int hashCode() {
        return Objects.hash(employees);
    }
}
