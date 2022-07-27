package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/animals")
public class AnimalController {

    private final AnimalService animalService;

    public AnimalController(AnimalService animalsService) {
        this.animalService = animalsService;
    }

    @GetMapping
    public Map<String, Animal> listAnimals() {
        return animalService.getAnimals();
    }

}
