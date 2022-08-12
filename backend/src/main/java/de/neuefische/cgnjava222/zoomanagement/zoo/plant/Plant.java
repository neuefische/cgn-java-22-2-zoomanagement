package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import de.neuefische.cgnjava222.zoomanagement.zoo.Position;
import org.springframework.data.annotation.Id;

public record Plant(String name, @Id String id, Position position) {

}
