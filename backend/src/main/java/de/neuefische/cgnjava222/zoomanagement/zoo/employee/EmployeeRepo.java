package de.neuefische.cgnjava222.zoomanagement.zoo.employee;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepo extends MongoRepository<Employee, String> {

}
