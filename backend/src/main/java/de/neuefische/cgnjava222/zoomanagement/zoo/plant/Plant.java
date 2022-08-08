package de.neuefische.cgnjava222.zoomanagement.zoo.plant;
import org.springframework.data.annotation.Id;

public record Plant(String name, @Id String id,Position position) {

}
