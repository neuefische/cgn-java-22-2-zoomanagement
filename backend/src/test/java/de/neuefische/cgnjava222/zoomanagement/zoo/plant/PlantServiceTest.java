package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;
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
}
