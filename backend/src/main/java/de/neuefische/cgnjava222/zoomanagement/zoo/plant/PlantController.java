package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.springframework.http.HttpStatus;
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
            @RequestBody NewPlant newPlant) {
        return ResponseEntity
                .status(201)
                .body(
                        plantService.addPlant(newPlant)
                );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlant(@PathVariable String id) {
        boolean deleteSuccess = plantService.deletePlant(id);
        return new ResponseEntity<>(deleteSuccess ? HttpStatus.NO_CONTENT : HttpStatus.NOT_FOUND);
    }

    @GetMapping("/apiplants")
    List<String> getPlantsFromApi() {
        return plantService.getPlantsFromApi();
    }

}
