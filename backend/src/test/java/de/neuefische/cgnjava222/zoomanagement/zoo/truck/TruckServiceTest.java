package de.neuefische.cgnjava222.zoomanagement.zoo.truck;


import de.neuefische.cgnjava222.zoomanagement.zoo.Position;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class TruckServiceTest {
    private final TruckRepo testTruckRepo = mock(TruckRepo.class);
    private final TruckService testTruckServiceMock = mock(TruckService.class);
    private final TruckService testTruckService = new TruckService(testTruckRepo);
    private final TruckController testTruckController = new TruckController(testTruckServiceMock);
    private final List<Truck> testList = List.of(
            new Truck("Currywurst Hannes", new Position("0", "0"), "d67bc95f-cdc4-4930-b3e3-34a684806f20"),
            new Truck("Margrets Gesunde Küche", new Position("1", "3"), "ec8bd7d2-bb00-4db7-ae4c-7879bb9b5512"),
            new Truck("Annes knusprige Pommes", new Position("2", "2"), "e32ce324-279d-4e56-aed0-5dee6c919b89"));

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
    void deleteTruckTest() {
        // given
        Truck truck = new Truck("Currywurst", new Position("0", "0"), "0a628570-01ed-4599-92e8-127fefce9f2e");

        when(testTruckRepo.existsById(truck.id())).thenReturn(true);
        doNothing().when(testTruckRepo).deleteById(truck.id());

        testTruckService.deleteTruck((truck.id()));
        verify(testTruckRepo).deleteById((truck.id()));
    }


    @Test
    void deleteTruckDoesNotExistTest() {
        String id = "0a628570-01ed-4599-92e8-127fefce9f2e";
        Truck truck = new Truck("Currywurst", new Position("3", "6"), id);

        TruckRepo truckRepo = mock(TruckRepo.class);
        when(truckRepo.existsById(truck.id())).thenReturn(false);
        doNothing().when(truckRepo).deleteById(truck.id());

        TruckService truckService = new TruckService(truckRepo);

        assertThrows(ResponseStatusException.class, () -> truckService.deleteTruck(id));
    }


    @Test
    void addTruckTest() {
        //given
        NewTruck testNewTruck = new NewTruck("Sometruck", new Position("0", "0"));
        Truck testTruck = new Truck("Sometruck", new Position("0", "0"), "1231231");
        when(testTruckRepo.save(any(Truck.class))).thenReturn(testTruck);
        //when
        Truck actual = testTruckService.addTruck(testNewTruck);
        //then
        Assertions.assertEquals(testTruck, actual);
    }

    @Test
    void updatePositioningTest() {
        Truck truck = new Truck("Döner-Truck", new Position("2", "5"), "5");

        when(testTruckRepo.save(any(Truck.class))).thenReturn(truck);
        Truck actual = testTruckService.updateTruck(truck);
        Assertions.assertEquals(truck, actual);

    }
}
