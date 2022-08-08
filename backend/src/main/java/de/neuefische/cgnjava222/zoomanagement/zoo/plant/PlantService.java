package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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

    public Plant addPlant(NewPlant newPlant) {
        Plant plant = new Plant(newPlant.name(), UUID.randomUUID().toString(), new Position("0", "0"));
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

        return plantRepo.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND));
    }


    public Plant updatePlantWithNewPosition(String id, Plant plantWithPosition) {

        plantRepo.deleteById(id);

        return plantRepo.save(plantWithPosition);
    }
}

