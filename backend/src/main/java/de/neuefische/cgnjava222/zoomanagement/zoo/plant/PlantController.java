package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/plants")
public class PlantController {


    private final PlantService plantService;

    public PlantController(PlantService plantService) {
        this.plantService = plantService;
    }

    @GetMapping()
    List<Plant> getPlants() {
        return plantService.getAllPlants();
    }

    @PostMapping
    public ResponseEntity<Plant> addPlant(
            @RequestBody PlantWithOutId plantName) {
        return ResponseEntity
                .status(201)
                .body(
                        plantService.addPlant(plantName)
                );


    }
}
