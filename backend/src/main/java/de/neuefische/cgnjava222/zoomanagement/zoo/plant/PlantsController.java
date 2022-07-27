package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/plants")
public class PlantsController {

    @GetMapping()
    List<Plant> getPlants() {
        return List.of(
                new Plant("Birke", UUID.randomUUID().toString()),
                new Plant("Buche", UUID.randomUUID().toString()),
                new Plant("Lärche", UUID.randomUUID().toString())
        );
    }
}
