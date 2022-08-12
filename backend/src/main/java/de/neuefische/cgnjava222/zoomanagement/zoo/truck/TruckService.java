package de.neuefische.cgnjava222.zoomanagement.zoo.truck;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class TruckService {
    private final TruckRepo truckRepo;

    public TruckService(TruckRepo truckRepo) {
        this.truckRepo = truckRepo;
    }

    public List<Truck> getAllTrucks() {
        return truckRepo.findAll();
    }

    public Truck addTruck(NewTruck newTruck) {
        return truckRepo.save(newTruck.withRandomId());
    }

    public void deleteTruck(String truckToDelete) {
        boolean doesTruckExist = truckRepo.existsById(truckToDelete);
        if (doesTruckExist) {
            truckRepo.deleteById(truckToDelete);
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Truck mit id" + truckToDelete + "nicht gefunden");
    }

    public Truck updateTruck(Truck truck) {
        return truckRepo.save(truck);
    }
}
