package de.neuefische.cgnjava222.zoomanagement.zoo.truck;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TruckControllerTest {

    private final TruckService testTruckService = mock(TruckService.class);
    private final TruckController testTruckController = new TruckController(testTruckService);
    private final List<Truck> testList = List.of(
            new Truck("Currywurst Hannes", new Coordinates("2", "7"), "123ABC"),
            new Truck("Margrets Gesunde Küche", new Coordinates("1", "3"), "456DEF"),
            new Truck("Annes knusprige Pommes", new Coordinates("4", "9"), "789GHI"));

    @Test
    void getAllTrucksTest() {
        // given
        when(testTruckService.getAllTrucks()).thenReturn(testList);
        // when
        List<Truck> actual = testTruckController.getAllTrucks();
        // then
        Assertions.assertArrayEquals(testList.toArray(), actual.toArray());
    }

    @Test
    void addTruck() {
        //given
        NewTruck testNewTruck = new NewTruck("Döner", new Coordinates("2", "5"));
        Truck testTruck = new Truck("Döner", new Coordinates("4", "5"), "kahdaihdölahdöalshdööah");
        when(testTruckService.addTruck(testNewTruck)).thenReturn(testTruck);
        //when
        Truck actual = testTruckController.addTruck(testNewTruck);
        //then
        Assertions.assertEquals(testTruck, actual);
    }

}
