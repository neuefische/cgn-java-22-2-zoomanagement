package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

class AnimalControllerTest {

    private final AnimalService animalService = mock(AnimalService.class);
    private final AnimalController animalController = new AnimalController(animalService);

    @Test
    void deleteAnimal() {
        Animal animal = new Animal("123", "Katze");
        doNothing().when(animalService).deleteAnimal(animal.id());

        animalController.deleteAnimal(animal.id());
        verify(animalService).deleteAnimal(animal.id());
    }
}