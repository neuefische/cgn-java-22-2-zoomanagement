package de.neuefische.cgnjava222.zoomanagement.zoo.employee.model;

import org.springframework.data.annotation.Id;

import java.util.UUID;

public record Employee(

        String name,
        @Id String id

) {


    public Employee(String name) {
        this(name, UUID.randomUUID().toString());
    }
}



