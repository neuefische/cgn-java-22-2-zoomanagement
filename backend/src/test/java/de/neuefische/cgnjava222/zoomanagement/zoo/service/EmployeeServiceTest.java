package de.neuefische.cgnjava222.zoomanagement.zoo.service;

import de.neuefische.cgnjava222.zoomanagement.zoo.employee.model.Employee;
import de.neuefische.cgnjava222.zoomanagement.zoo.employee.repository.EmployeeRepo;
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

    @Test
    void testGetListEmployees() {
        when(employeeRepo.findAll()).thenReturn(employeesList);

        List<Employee> actual = employeeRepo.findAll();

        Assertions.assertArrayEquals(employeesList.toArray(), actual.toArray());

    }
}