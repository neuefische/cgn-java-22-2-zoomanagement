package de.neuefische.cgnjava222.zoomanagement.zoo.truck;

import java.util.UUID;

public record NewTruck(String name) {

    public Truck withRandomId() {
        return new Truck(name(), UUID.randomUUID().toString());
    }
}
