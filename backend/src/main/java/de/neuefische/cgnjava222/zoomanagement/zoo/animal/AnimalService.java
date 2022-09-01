package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AnimalService {

    private final AnimalRepo animalRepo;

    AnimalService(AnimalRepo animalRepo) {
        this.animalRepo = animalRepo;
    }

    public List<Animal> getAnimals() {
        return animalRepo.findAll();
    }

    public Animal addAnimal(NewAnimal newAnimal) {
        return animalRepo.save(new Animal(
                UUID.randomUUID().toString(),
                newAnimal.name()
        ));

    }

    public boolean deleteAnimal(String id) throws AnimalNotFoundException {
        if (animalRepo.existsById(id)) {
            animalRepo.deleteById(id);
            return true;
        } else {
            throw new AnimalNotFoundException("Animal with ID "+ id + " not found");
        }
    }
}
