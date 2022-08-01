package de.neuefische.cgnjava222.zoomanagement.zoo.employee;

import org.springframework.data.annotation.Id;

public record Employee(

        String name,
        @Id String id

) {


}



