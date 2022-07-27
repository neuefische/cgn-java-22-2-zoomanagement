package de.neuefische.cgnjava222.zoomanagement.zoo.plants.plantsController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PlantsController {

    @GetMapping(path = "/api/plants")
    List<String> getPlants() {
        return new ArrayList<>(List.of("Birke", "Buche", "Lärche"));

    }
}
