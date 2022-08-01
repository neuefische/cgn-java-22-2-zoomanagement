package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PlantService {
    private final PlantRepo plantRepo;

    public PlantService(PlantRepo plantRepo) {
        this.plantRepo = plantRepo;
    }

    public List<Plant> getAllPlants() {
        return plantRepo.findAll();
    }

    public Plant addPlant(PlantWithOutId newPlant) {
        Plant plant = new Plant(newPlant.name(), UUID.randomUUID().toString());
        return plantRepo.save(plant);
    }
}
