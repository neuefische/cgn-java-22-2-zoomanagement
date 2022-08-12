package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Service
public class PlantService {
    private final PlantRepo plantRepo;
    @Value("${plantsApiUrl}")
    private String plantsApiUrl;
    private final WebClient webClient = WebClient.create();

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
        ResponseEntity<List<String>> getPlantsFromApiResult = webClient.get().uri(plantsApiUrl)
                .retrieve()
                .toEntity(new ParameterizedTypeReference<List<String>>() {
                })
                .block();
        if (getPlantsFromApiResult == null)
            return Collections.emptyList();
        return getPlantsFromApiResult
                .getBody();

    }
}

