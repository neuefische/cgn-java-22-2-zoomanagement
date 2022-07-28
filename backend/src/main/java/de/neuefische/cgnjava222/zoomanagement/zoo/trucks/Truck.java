package de.neuefische.cgnjava222.zoomanagement.zoo.trucks;

import java.util.UUID;

public record Truck(String name, String id) {

    public Truck(String name) {
        this(name, String.valueOf(UUID.randomUUID()));
    }
}
