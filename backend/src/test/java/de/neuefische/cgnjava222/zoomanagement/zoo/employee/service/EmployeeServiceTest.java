package de.neuefische.cgnjava222.zoomanagement.zoo.employee.service;

import de.neuefische.cgnjava222.zoomanagement.zoo.employee.model.Employee;
import de.neuefische.cgnjava222.zoomanagement.zoo.employee.repository.EmployeeRepo;
import de.neuefische.cgnjava222.zoomanagement.zoo.service.EmployeeService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class EmployeeServiceTest {
    List<Employee> employeesList = List.of(
            new Employee("Clea Gruber", "1"),
            new Employee("Reiner Zufall", "2"),
            new Employee("Anna nass", "3")
    );
    private final EmployeeRepo employeeRepo = mock(EmployeeRepo.class);
    private final EmployeeService employeeService = new EmployeeService(employeeRepo);
    @Test
    void testGetListEmployees() {
        when(employeeRepo.findAll()).thenReturn(employeesList);

        List<Employee> actual = employeeService.getAllEmployees();

        Assertions.assertArrayEquals(employeesList.toArray(), actual.toArray());

    }
}