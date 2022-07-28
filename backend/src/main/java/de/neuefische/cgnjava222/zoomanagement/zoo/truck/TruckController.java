package de.neuefische.cgnjava222.zoomanagement.zoo.truck;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trucks")

public class TruckController {

    private final TruckService truckService;

    public TruckController(TruckService truckService) {
        this.truckService = truckService;
    }

    @GetMapping
    public List<Truck> getAllTrucks() {
        return truckService.getAllTrucks();
    }

    @PostMapping
    public Truck addTruck(@RequestBody String name) {
        return truckService.addTruck(name);
    }
}
