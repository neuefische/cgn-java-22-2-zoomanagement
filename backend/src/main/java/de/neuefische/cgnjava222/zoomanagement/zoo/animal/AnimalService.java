package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.springframework.beans.factory.annotation.Value;
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
    @Value("${apiUrl}")
    private String apiUrl;
    private final WebClient webClient = WebClient.create();


    AnimalService(AnimalRepo animalRepo) {
        this.animalRepo = animalRepo;
    }

    public List<Animal> getAnimals() {
        return animalRepo.findAll();
    }

    public Animal addAnimal(NewAnimal newAnimal) {

        return animalRepo.save(new Animal(
                UUID.randomUUID().toString(),
                newAnimal.name(),
                newAnimal.position(),
                newAnimal.emoji()
        ));

    }

    public boolean deleteAnimal(String id) {
        if (animalRepo.existsById(id)) {
            animalRepo.deleteById(id);
            return true;
        }
        return false;
    }

    public Animal updateAnimalPosition(Animal animalWithPosition) {

        animalRepo.deleteById(animalWithPosition.id());
        animalRepo.save(animalWithPosition);

        return animalWithPosition;
    }


    public Animal updateAnimalEmoji(Animal animalWithEmoji) {

        animalRepo.deleteById(animalWithEmoji.id());
        animalRepo.save(animalWithEmoji);

        return animalWithEmoji;
    }



    public List<String> getAnimalsFromAPI() {

        ResponseEntity<List<String>> getAnimalsFromAPIResult = webClient.get().uri(apiUrl)
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
