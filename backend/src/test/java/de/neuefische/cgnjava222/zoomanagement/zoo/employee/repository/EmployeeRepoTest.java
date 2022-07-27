package de.neuefische.cgnjava222.zoomanagement.zoo.employee.repository;

import de.neuefische.cgnjava222.zoomanagement.zoo.employee.model.Employee;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


class EmployeeRepoTest {

    @Test
    void testAllEmployeesPositiveInList() {
        //given
        EmployeeRepo employeeRepo = mock(EmployeeRepo.class);


        when(employeeRepo.listEmployees()).thenReturn(List.of(
                new Employee("Clea Gruber"),
                new Employee("Reiner Zufall"),
                new Employee("Anna nass")
        ));


        //wenn
        List<String> expected = Stream.of(
                new Employee("Clea Gruber"),
                new Employee("Reiner Zufall"),
                new Employee("Anna nass")
        ).map(employee -> employee.name()).collect(Collectors.toList());

        List<String> actual =
                employeeRepo.listEmployees().stream().map(employee -> employee.name()).collect(Collectors.toList());


        Assertions.assertEquals(expected, actual);

        //then
    }


    @Test
    void testAllEmployeesNegativeInList() {
        //given
        EmployeeRepo employeeRepo = mock(EmployeeRepo.class);


        when(employeeRepo.listEmployees()).thenReturn(List.of(
                new Employee("Clea Gruber"),
                new Employee("Reiner Zufall"),
                new Employee("Anna nass")
        ));


        //wenn
        List<String> expected = Stream.of(
                new Employee("Cleawww Gruber"),
                new Employee("Reiner Zufall"),
                new Employee("Anna nass")
        ).map(employee -> employee.name()).collect(Collectors.toList());

        List<String> actual =
                employeeRepo.listEmployees().stream().map(employee -> employee.name()).collect(Collectors.toList());
        

        Assertions.assertNotEquals(expected, actual);

        //then
    }
}