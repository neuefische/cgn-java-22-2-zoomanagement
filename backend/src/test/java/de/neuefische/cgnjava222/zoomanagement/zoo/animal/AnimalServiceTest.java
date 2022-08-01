package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class AnimalServiceTest {

    @Test
    void getAnimals() {
        List<Animal> animals = List.of(
                new Animal("1", "Eisbär"),
                new Animal("2", "Tiger"),
                new Animal("3", "Giraffe")
        );

        AnimalRepo animalRepo = mock(AnimalRepo.class);
        when(animalRepo.findAll()).thenReturn(animals);

        AnimalService animalService = new AnimalService(animalRepo);

        List<Animal> actualResult = animalService.getAnimals();
        List<Animal> expectedResult = List.of(
                new Animal("1", "Eisbär"),
                new Animal("2", "Tiger"),
                new Animal("3", "Giraffe")
        );

        assertThat(actualResult).hasSameElementsAs(expectedResult);
    }

    @Test
    void addAnimals() {

        Animal animal = new Animal("1", "Schmetterling");

        AnimalRepo animalRepo = mock(AnimalRepo.class);
        when(animalRepo.save(any(Animal.class)))
                .thenReturn(animal);

        AnimalService animalService = new AnimalService(animalRepo);
        Animal actualResult = animalService.addAnimal(new NewAnimal("Schmetterling"));

        assertThat(actualResult).isEqualTo(animal);

    }

}
