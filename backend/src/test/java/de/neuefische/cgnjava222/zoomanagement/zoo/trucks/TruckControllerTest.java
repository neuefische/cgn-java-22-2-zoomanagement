package de.neuefische.cgnjava222.zoomanagement.zoo.trucks;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TruckControllerTest {

    private final TruckRepo testTruckRepo = mock(TruckRepo.class);
    private final TruckController truckController = new TruckController(testTruckRepo);
    private final List<Truck> testList = List.of(
            new Truck("Currywurst Hannes"),
            new Truck("Margrets Gesunde Küche"),
            new Truck("Annes knusprige Pommes"));

    @Test
    void getAllTrucksTest() {
        // given
        when(testTruckRepo.getTrucks()).thenReturn(testList);
        // when
        List<Truck> actual = truckController.getAllTrucks();
        // then
        Assertions.assertArrayEquals(testList.toArray(), actual.toArray());
    }
}