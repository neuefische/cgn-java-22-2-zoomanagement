package de.neuefische.cgnjava222.zoomanagement.zoo.trucks;

import java.util.UUID;

public record Truck(String name, UUID id) {

    public Truck(String name) {
        this(name, UUID.randomUUID());
    }
}
