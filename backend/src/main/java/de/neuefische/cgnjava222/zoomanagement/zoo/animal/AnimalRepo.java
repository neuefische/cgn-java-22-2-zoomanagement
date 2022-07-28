package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class AnimalRepo {

    private final List<Animal> animals = new ArrayList<>(List.of(
            new Animal("1", "Eisbär"),
            new Animal("2", "Tiger"),
            new Animal("3", "Giraffe")
    ));

    public List<Animal> getAnimals() {
        return animals;
    }
}
