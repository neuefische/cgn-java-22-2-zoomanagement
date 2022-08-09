package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

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
        Plant plant = new Plant(newPlant.name(), UUID.randomUUID().toString());
        return plantRepo.save(plant);
    }

    public boolean deletePlant(String id) {
        if (plantRepo.existsById(id)) {
            plantRepo.deleteById(id);
            return true;
        }
        return false;
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

