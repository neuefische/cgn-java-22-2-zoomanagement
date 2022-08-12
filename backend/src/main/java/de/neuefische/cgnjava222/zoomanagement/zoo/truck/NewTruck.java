package de.neuefische.cgnjava222.zoomanagement.zoo.truck;

import de.neuefische.cgnjava222.zoomanagement.zoo.Position;

import java.util.UUID;


public record NewTruck(String name, Position position) {

    public Truck withRandomId() {
        return new Truck(name(), position, UUID.randomUUID().toString());
    }
}
