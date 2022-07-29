package de.neuefische.cgnjava222.zoomanagement.zoo.truck;

import org.springframework.data.annotation.Id;

public record Truck(String name, @Id String id) {

}
