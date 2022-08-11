package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Service
public class PlantService {
    private final PlantRepo plantRepo;
    private final WebClient webClient = WebClient.create("https://my-json-server.typicode.com/alanmiste/plants/Trees");

    public PlantService(PlantRepo plantRepo) {
        this.plantRepo = plantRepo;
    }

    public List<Plant> getAllPlants() {
        return plantRepo.findAll();
    }

    public Plant addPlant(NewPlant newPlant) {
        Plant plant = new Plant(newPlant.name(), UUID.randomUUID().toString(), new Position(null, null));
        return plantRepo.save(plant);
    }

    public boolean deletePlant(String id) {
        if (plantRepo.existsById(id)) {
            plantRepo.deleteById(id);
            return true;
        }
        return false;
    }

    public Plant getPlantById(String id) {

        return plantRepo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }


    public Plant updatePlantWithNewPosition(String id, Plant plantWithPosition) {
        if (!id.equals(plantWithPosition.id())) throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        return plantRepo.save(plantWithPosition);
    }

    public List<String> getPlantsFromApi() {
        ResponseEntity<List<String>> result = webClient.get()
                .retrieve()
                .toEntity(new ParameterizedTypeReference<List<String>>() {
                })
                .block();
        if (result == null)
            return Collections.emptyList();
        return result
                .getBody();

    }
}

