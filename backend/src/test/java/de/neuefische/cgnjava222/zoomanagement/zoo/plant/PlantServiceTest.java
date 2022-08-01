package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class PlantServiceTest {

    private final PlantRepo testPlantRepo = mock(PlantRepo.class);
    private final PlantService testPlantService = new PlantService(testPlantRepo);
    private final List<Plant> testList = List.of(
            new Plant("Birke", UUID.randomUUID().toString()),
            new Plant("Buche", UUID.randomUUID().toString()),
            new Plant("Lärche", UUID.randomUUID().toString())
    );

    @Test
    void getAllPlantsTest() {
        when(testPlantRepo.findAll()).thenReturn(testList);
        List<Plant> actual = testPlantService.getAllPlants();
        Assertions.assertArrayEquals(testList.toArray(), actual.toArray());
    }

    @Test
    void addPlantTest() {
        Plant plant = new Plant("Birke", UUID.randomUUID().toString());
        PlantRepo plantRepo = mock(PlantRepo.class);
        when(testPlantRepo.save(any(Plant.class))).thenReturn(plant);
        PlantService plantService = new PlantService(plantRepo);
        Plant actual = testPlantService.addPlant(new PlantWithoutId(plant.name()));
        assertThat(actual).isEqualTo(plant);
    }
}
