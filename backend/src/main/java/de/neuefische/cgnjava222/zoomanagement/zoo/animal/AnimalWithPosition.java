package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.springframework.data.annotation.Id;

public record AnimalWithPosition(@Id String id, String name, Position position) {
}
