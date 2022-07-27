package de.neuefische.cgnjava222.zoomanagement.zoo.plants;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
public class PlantsController {

    @GetMapping(path = "/api/plants")
    List<Plant> getPlants() {
        return new ArrayList<>(List.of(
                new Plant("Birke", UUID.randomUUID().toString()),
                new Plant("Buche", UUID.randomUUID().toString()),
                new Plant("Lärche", UUID.randomUUID().toString())
        ));
    }
}
