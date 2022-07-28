package de.neuefische.cgnjava222.zoomanagement.zoo.trucks;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TruckRepo extends MongoRepository<Truck, String> {

}
