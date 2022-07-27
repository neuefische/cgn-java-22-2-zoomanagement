package de.neuefische.cgnjava222.zoomanagement.zoo.trucks;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/trucks")

public class TruckController {

    private final TruckRepo truckRepo;

    public TruckController(TruckRepo truckRepo) {
        this.truckRepo = truckRepo;
    }

    @GetMapping
    public List<Truck> getAllTrucks() {
        return truckRepo.getTrucks();
    }
}
