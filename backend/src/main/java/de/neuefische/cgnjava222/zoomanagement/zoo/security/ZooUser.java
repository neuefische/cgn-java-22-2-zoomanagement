package de.neuefische.cgnjava222.zoomanagement.zoo.security;

import org.springframework.data.annotation.Id;

public record ZooUser(

        @Id
        String username,
        String password


) {

}
