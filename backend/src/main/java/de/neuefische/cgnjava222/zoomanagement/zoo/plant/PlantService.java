package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlantService {
    private final PlantRepo plantRepo;

    public PlantService(PlantRepo plantRepo) {
        this.plantRepo = plantRepo;
    }

    public List<Plant> getAllPlants() {
        return plantRepo.getAllPlants();
    }

}
