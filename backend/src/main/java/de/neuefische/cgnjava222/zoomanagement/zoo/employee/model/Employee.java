package de.neuefische.cgnjava222.zoomanagement.zoo.employee.model;

import java.util.UUID;

public record Employee(

        String name,
        String id

) {

    public Employee(String name, String id) {
        this.name = name;
        this.id = id;
    }


    public Employee(String name) {
        this(name, UUID.randomUUID().toString());
    }
}



