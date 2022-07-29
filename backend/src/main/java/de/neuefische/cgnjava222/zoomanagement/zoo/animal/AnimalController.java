package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/animals")
public class AnimalController {

    private final AnimalService animalService;

    public AnimalController(AnimalService animalService) {
        this.animalService = animalService;
    }

    @GetMapping
    public List<Animal> listAnimals() {
        return animalService.getAnimals();
    }

    @PostMapping
    public ResponseEntity<Animal> addAnimal(
            @RequestBody String animalName
    ) {

        var savedItem = animalService.addAnimal(animalName);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedItem);

    }

}
