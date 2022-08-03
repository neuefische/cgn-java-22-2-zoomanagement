package de.neuefische.cgnjava222.zoomanagement.zoo.employee;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class EmployeeServiceTest {
    List<Employee> employeesList = List.of(
            new Employee("Clea Gruber", "1"),
            new Employee("Reiner Zufall", "2"),
            new Employee("Anna nass", "3")
    );
    private final EmployeeRepo employeeRepo = mock(EmployeeRepo.class);
    private final EmployeeService employeeService = new EmployeeService(employeeRepo);
    private final Employee employee = new Employee("Test", "1");
    private final NewEmployee newEmployee = new NewEmployee("Test");
    @Test
    void testGetListEmployees() {
        when(employeeRepo.findAll()).thenReturn(employeesList);
        List<Employee> actual = employeeService.getAllEmployees();
        Assertions.assertArrayEquals(employeesList.toArray(), actual.toArray());
    }

    @Test
    void addEmployeeTest() {
        // given
        when(employeeRepo.save(any())).thenReturn(employee);
        //when
        Employee actual = employeeService.addEmployee(newEmployee);
        Assertions.assertEquals(employee.name(), actual.name());
    }

    @Test
    void deleteEmployeeTest(){
         Employee employee= new Employee("Hans", "9");

        EmployeeRepo employeeRepo = mock(EmployeeRepo.class);
        when(employeeRepo.existsById(employee.id())).thenReturn(true);

        doNothing().when(employeeRepo).deleteById(employee.id());

        EmployeeService employeeService = new EmployeeService(employeeRepo);

        employeeService.deleteEmployee(employee.id());
        verify(employeeRepo).deleteById(employee.id());
    }
    @Test
    void deleteEmployeeDontExistTest(){
        Employee employee= new Employee("Hans", "9");

        EmployeeRepo employeeRepo = mock(EmployeeRepo.class);
        when(employeeRepo.existsById(employee.id())).thenReturn(false);
        doNothing().when(employeeRepo).deleteById(employee.id());

        EmployeeService employeeService = new EmployeeService(employeeRepo);

        employeeService.deleteEmployee(employee.id());
        verify(employeeRepo,times(0)).deleteById(employee.id());
    }
}
