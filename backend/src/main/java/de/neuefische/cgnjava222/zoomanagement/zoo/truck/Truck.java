package de.neuefische.cgnjava222.zoomanagement.zoo.truck;

import de.neuefische.cgnjava222.zoomanagement.zoo.Position;
import org.springframework.data.annotation.Id;


public record Truck(
        String name,
        Position position,
        @Id String id) {

}
