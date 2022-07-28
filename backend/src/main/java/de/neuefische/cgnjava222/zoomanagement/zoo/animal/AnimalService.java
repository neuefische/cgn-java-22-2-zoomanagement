package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AnimalService {

    private final AnimalRepo animalRepo;

    public AnimalService(AnimalRepo animalRepo) {
        this.animalRepo = animalRepo;
    }

    public List<Animal> getAnimals() {
        return animalRepo.getAnimals();
    }

}
