package de.neuefische.cgnjava222.zoomanagement.zoo.truck;

import java.util.UUID;

public record NewTruck(String name, Coordinates position) {

    public Truck withRandomId() {
        return new Truck(name(), position, UUID.randomUUID().toString());
    }
}
