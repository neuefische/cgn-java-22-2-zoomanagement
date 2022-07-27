package de.neuefische.cgnjava222.zoomanagement.zoo.trucks;

import java.util.UUID;

public record Truck(String truckName, UUID id) {

    public Truck(String truckName) {
        this(truckName, UUID.randomUUID());
    }
}
