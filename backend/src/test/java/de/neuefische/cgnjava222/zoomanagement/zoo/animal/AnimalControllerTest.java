package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class AnimalControllerTest {

    private final AnimalService animalService = mock(AnimalService.class);
    private final AnimalController animalController = new AnimalController(animalService);

    @Test
    void deleteAnimal() {
        Animal animal = new Animal("123", "Katze");
        when(animalService.deleteAnimal(animal.id())).thenReturn(true);

        ResponseEntity<Void> actual = animalController.deleteAnimal(animal.id());

        Assertions.assertEquals(new ResponseEntity<>(HttpStatus.NO_CONTENT), actual);
    }
}