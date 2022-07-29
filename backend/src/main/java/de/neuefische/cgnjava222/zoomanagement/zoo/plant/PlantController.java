package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/plants")
public class PlantController {

    record Planttype(String name) {
    }

    private final PlantService plantService;

    public PlantController(PlantService plantService) {
        this.plantService = plantService;
    }

    @GetMapping()
    List<Plant> getPlants() {
        return plantService.getAllPlants();
    }

    @PostMapping(path = "")
    void addPlant(@RequestBody Planttype nameJSON) {
        Plant plant = new Plant(nameJSON.name, UUID.randomUUID().toString());
        plantService.addPlant(plant);
    }
}
