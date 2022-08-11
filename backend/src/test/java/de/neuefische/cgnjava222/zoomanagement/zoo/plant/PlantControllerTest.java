package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.UUID;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class PlantControllerTest {

    private final PlantService testPlantService = mock(PlantService.class);
    private final PlantController testPlantController = new PlantController(testPlantService);
    private final List<Plant> testList = List.of(
            new Plant("Birke", UUID.randomUUID().toString(), new Position("0", "0")),
            new Plant("Buche", UUID.randomUUID().toString(), new Position("0", "0")),
            new Plant("Lärche", UUID.randomUUID().toString(), new Position("0", "0")));

    @Test
    void getAllPlantsTest() {
        when(testPlantService.getAllPlants()).thenReturn(testList);
        List<Plant> actual = testPlantController.getPlants();
        Assertions.assertArrayEquals(testList.toArray(), actual.toArray());
    }
}
