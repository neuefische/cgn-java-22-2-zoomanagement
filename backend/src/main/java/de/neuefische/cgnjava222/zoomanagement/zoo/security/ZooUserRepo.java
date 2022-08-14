package de.neuefische.cgnjava222.zoomanagement.zoo.security;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ZooUserRepo extends MongoRepository<ZooUser, String> {
}
