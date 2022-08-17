package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import de.neuefische.cgnjava222.zoomanagement.zoo.Position;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class AnimalServiceTest {

    @Test
    void getAnimals() {
        List<Animal> animals = List.of(
                new Animal("1", "Eisbär", null,null),
                new Animal("2", "Tiger", null, null),
                new Animal("3", "Giraffe", null, null)
        );

        AnimalRepo animalRepo = mock(AnimalRepo.class);
        when(animalRepo.findAll()).thenReturn(animals);

        AnimalService animalService = new AnimalService(animalRepo);

        List<Animal> actualResult = animalService.getAnimals();
        List<Animal> expectedResult = List.of(
                new Animal("1", "Eisbär", null, null),
                new Animal("2", "Tiger", null, null),
                new Animal("3", "Giraffe", null, null)
        );

        assertThat(actualResult).hasSameElementsAs(expectedResult);
    }

    @Test
    void addAnimals() {

        Animal animal = new Animal("1", "Schmetterling", null, null);

        AnimalRepo animalRepo = mock(AnimalRepo.class);
        when(animalRepo.save(any(Animal.class)))
                .thenReturn(animal);

        AnimalService animalService = new AnimalService(animalRepo);
        Animal actualResult = animalService.addAnimal(new NewAnimal("Schmetterling", null, null));

        assertThat(actualResult).isEqualTo(animal);

    }


    @Test
    void deleteAnimalTest() {
        Animal animal = new Animal("1", "Katze", null, null);

        AnimalRepo animalRepo = mock(AnimalRepo.class);
        when(animalRepo.existsById(animal.id())).thenReturn(true);

        doNothing().when(animalRepo).deleteById(animal.id());

        AnimalService animalService = new AnimalService(animalRepo);

        animalService.deleteAnimal(animal.id());
        verify(animalRepo).deleteById(animal.id());
    }

    @Test
    void deleteAnimalDoesNotExistTest() {
        Animal animal = new Animal("1", "Katze", null, null);

        AnimalRepo animalRepo = mock(AnimalRepo.class);
        when(animalRepo.existsById(animal.id())).thenReturn(false);
        doNothing().when(animalRepo).deleteById(animal.id());

        AnimalService animalService = new AnimalService(animalRepo);

        animalService.deleteAnimal(animal.id());
        verify(animalRepo, times(0)).deleteById(animal.id());
    }

    @Test
    void addAnimalPositionTest() {
        Animal animal = new Animal("1", "Katze", new Position("5", "6"), null);

        AnimalRepo animalRepo = mock(AnimalRepo.class);
        when(animalRepo.existsById(animal.id())).thenReturn(true);

        when(animalRepo.save(any(Animal.class)))
                .thenReturn(animal);

        AnimalService animalService = new AnimalService(animalRepo);
        Animal actualResult = animalService.updateAnimalPosition(animal);

        assertThat(actualResult).isEqualTo(animal);
    }

    @Test
    void addAnimalEmojiTest() {
        Animal animal = new Animal("1", "Katze", new Position("5", "6"), new Emoji("&#128513"));

        AnimalRepo animalRepo = mock(AnimalRepo.class);
        when(animalRepo.existsById(animal.id())).thenReturn(true);

        when(animalRepo.save(any(Animal.class)))
                .thenReturn(animal);

        AnimalService animalService = new AnimalService(animalRepo);
        Animal actualResult = animalService.updateAnimalEmoji(animal);

        assertThat(actualResult).isEqualTo(animal);
    }

}
