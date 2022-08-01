package de.neuefische.cgnjava222.zoomanagement.zoo.truck;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TruckServiceTest {

    private final TruckRepo testTruckRepo = mock(TruckRepo.class);
    private final TruckService testTruckService = new TruckService(testTruckRepo);
    private final List<Truck> testList = List.of(
            new Truck("Currywurst Hannes", "d67bc95f-cdc4-4930-b3e3-34a684806f20"),
            new Truck("Margrets Gesunde Küche", "ec8bd7d2-bb00-4db7-ae4c-7879bb9b5512"),
            new Truck("Annes knusprige Pommes", "e32ce324-279d-4e56-aed0-5dee6c919b89"));

    @Test
    void getAllTrucksTest() {
        // given
        when(testTruckRepo.findAll()).thenReturn(testList);
        // when
        List<Truck> actual = testTruckService.getAllTrucks();
        // then
        Assertions.assertArrayEquals(testList.toArray(), actual.toArray());
    }

    @Test
    void addTruckTest() {
        //given
        NewTruck testNewTruck = new NewTruck("Sometruck");
        Truck testTruck = new Truck("Sometruck", "1231231");
        when(testTruckRepo.save(any(Truck.class))).thenReturn(testTruck);
        //when
        Truck actual = testTruckService.addTruck(testNewTruck);
        //then
        Assertions.assertEquals(testTruck, actual);
    }
}
