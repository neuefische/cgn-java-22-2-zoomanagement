package de.neuefische.cgnjava222.zoomanagement.zoo.trucks;

import org.springframework.data.annotation.Id;

import java.util.UUID;

public record Truck(String name, @Id String id) {

    public static Truck of(String name) {
        return new Truck(name, String.valueOf(UUID.randomUUID()));
    }
}
