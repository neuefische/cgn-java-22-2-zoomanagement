package de.neuefische.cgnjava222.zoomanagement.zoo.employee;

import de.neuefische.cgnjava222.zoomanagement.zoo.Position;
import org.springframework.data.annotation.Id;

public record Employee(
        String name,
        @Id String id,
        Position position
) {
}
