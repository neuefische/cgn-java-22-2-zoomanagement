package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class AnimalRepo {

    private final Map<String, Animal> animals = new HashMap<>();

    public Map<String, Animal> getAnimals() {
        return animals;
    }

}
