package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class PlantServiceTest {

    private final PlantRepo testPlantRepo = mock(PlantRepo.class);
    private final PlantService testPlantService = new PlantService(testPlantRepo);
    private final List<Plant> testList = List.of(
            new Plant("Birke", UUID.randomUUID().toString(), new Position("0", 0)),
            new Plant("Buche", UUID.randomUUID().toString(), new Position("0", 0)),
            new Plant("Lärche", UUID.randomUUID().toString(), new Position("0", 0))
    );

    @Test
    void getAllPlantsTest() {
        when(testPlantRepo.findAll()).thenReturn(testList);
        List<Plant> actual = testPlantService.getAllPlants();
        Assertions.assertArrayEquals(testList.toArray(), actual.toArray());
    }

    @Test
    void addPlantTest() {
        Plant plant = new Plant("Birke", UUID.randomUUID().toString(), new Position("0", 0));
        PlantRepo plantRepo = mock(PlantRepo.class);
        when(testPlantRepo.save(any(Plant.class))).thenReturn(plant);
        PlantService plantService = new PlantService(plantRepo);
        Plant actual = testPlantService.addPlant(new NewPlant(plant.name()));
        assertThat(actual).isEqualTo(plant);
    }

    @Test
    void deletePlantTest(){
        doNothing().when(testPlantRepo).deleteById(any(String.class));
        when(testPlantRepo.existsById("2")).thenReturn(true);
        testPlantService.deletePlant("2");
        verify(testPlantRepo).deleteById("2");
    }

    @Test
    void getPlantByIdWhenExistsTest() {
        //Given
        Plant plant = new Plant("Rose", "5", new Position("7", 6));

        when(testPlantRepo.existsById("5")).thenReturn(true);
        when(testPlantRepo.findById("5")).thenReturn(Optional.of(plant));
        Plant actual = testPlantService.getPlantById("5");
        Assertions.assertEquals(plant, actual);
    }

    @Test
    void getPlantByIdWhenNotExistsTest() {
        //Given
        Plant plant = new Plant("Rose", "5", null);

       when(testPlantRepo.existsById(plant.id())).thenReturn(false);

        verify(testPlantRepo, times(0)).findById(plant.id());
    }

    void updatePlantWithPositionTest(){
        //Given
        Plant plantWithPosition = new Plant("Rose", "5", new Position("1", 5));

        //when

      when(testPlantRepo.existsById(plantWithPosition.id())).thenReturn(true);
      when(testPlantRepo.save(any(Plant.class))).thenReturn(plantWithPosition);
      Plant actualPlant=testPlantService.updatePlantWithNewPosition(plantWithPosition.id(), plantWithPosition);

      //then
        assertThat(actualPlant).isEqualTo(plantWithPosition);








    }



}
