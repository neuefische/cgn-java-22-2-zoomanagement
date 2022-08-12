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
            @RequestBody NewAnimal newAnimal
    ) {

        Animal savedItem = animalService.addAnimal(newAnimal);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedItem);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteAnimal(@PathVariable String id) {
        boolean deleteSuccess = animalService.deleteAnimal(id);
        return new ResponseEntity<>(deleteSuccess ? HttpStatus.NO_CONTENT : HttpStatus.NOT_FOUND);
    }

    @PutMapping("{id}")
    public ResponseEntity<Animal> addAnimalPosition(
            @PathVariable String id,
            @RequestBody Animal animalWithPosition) {
        Animal updatedAnimal = animalService.updateAnimalPosition(animalWithPosition);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(updatedAnimal);
    }

    @PutMapping("/emoji/{id}")
    public ResponseEntity<Animal> addAnimalEmoji(
            @PathVariable String id,
            @RequestBody Animal animalWithEmoji) {
        Animal updatedAnimal = animalService.updateAnimalEmoji(animalWithEmoji);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(updatedAnimal);

}
    @GetMapping("/apianimals")
    public List<String> getAnimalsFromAPI() {
        return animalService.getAnimalsFromAPI();
    }

}
