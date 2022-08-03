package de.neuefische.cgnjava222.zoomanagement.zoo.truck;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @ResponseStatus(code = HttpStatus.CREATED)
    public Truck addTruck(@RequestBody NewTruck truck) {
        return truckService.addTruck(truck);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteTruck(@PathVariable String truckToDelete) {


        if (truckService.deleteTruck(truckToDelete)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);


    }
}
