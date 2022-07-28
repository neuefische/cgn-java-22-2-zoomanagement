package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
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
        when(animalRepo.findAll())
                .thenReturn(animals);

        AnimalService animalService = new AnimalService(animalRepo);

        List<Animal> result = animalService.getAnimals();
        List<Animal> expectedResult = List.of(
                new Animal("1", "Eisbär"),
                new Animal("2", "Tiger"),
                new Animal("3", "Giraffe")
        );

        assertThat(result).hasSameElementsAs(expectedResult);
    }
}
