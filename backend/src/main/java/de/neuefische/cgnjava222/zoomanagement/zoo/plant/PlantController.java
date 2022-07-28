package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        return plantService.getAllPlants();}
}
