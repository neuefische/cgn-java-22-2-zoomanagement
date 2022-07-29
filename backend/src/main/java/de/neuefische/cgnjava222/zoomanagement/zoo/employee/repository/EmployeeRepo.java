package de.neuefische.cgnjava222.zoomanagement.zoo.employee.repository;

import de.neuefische.cgnjava222.zoomanagement.zoo.employee.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface EmployeeRepo extends MongoRepository<Employee, String> {


}
