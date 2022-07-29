package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PlantRepo extends MongoRepository<Plant, String> {
    List<Plant> findAll();
}
