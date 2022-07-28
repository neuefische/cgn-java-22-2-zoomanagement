package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class PlantRepo {

    private final List<Plant> plants = List.of(
            new Plant("Birke", UUID.randomUUID().toString()),
            new Plant("Buche", UUID.randomUUID().toString()),
            new Plant("Lärche", UUID.randomUUID().toString())
    );


    public List<Plant> getAllPlants() {
        return plants;
    }

}
