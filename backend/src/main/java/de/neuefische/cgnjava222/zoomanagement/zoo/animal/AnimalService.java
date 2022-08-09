package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Service
public class AnimalService {

    private final AnimalRepo animalRepo;
    private final WebClient webClient = WebClient.create("https://my-json-server.typicode.com/sofia-shchukina/fakeAPI/Animals");


    AnimalService(AnimalRepo animalRepo) {
        this.animalRepo = animalRepo;
    }

    public List<Animal> getAnimals() {
        return animalRepo.findAll();
    }

    public Animal addAnimal(NewAnimal newAnimal) {

        return animalRepo.save(new Animal(
                UUID.randomUUID().toString(),
                newAnimal.name()
        ));

    }

    public boolean deleteAnimal(String id) {
        if (animalRepo.existsById(id)) {
            animalRepo.deleteById(id);
            return true;
        }
        return false;
    }


    public List<String> getAnimalsFromAPI() {

        ResponseEntity<List<String>> getAnimalsFromAPIResult = webClient.get()
                .retrieve()
                .toEntity(new ParameterizedTypeReference<List<String>>() {
                })
                .block();
        if (getAnimalsFromAPIResult == null)
            return Collections.emptyList();
        return getAnimalsFromAPIResult
                .getBody();
    }

}
