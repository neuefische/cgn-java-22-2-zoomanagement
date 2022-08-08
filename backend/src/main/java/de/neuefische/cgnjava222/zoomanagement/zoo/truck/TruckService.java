package de.neuefische.cgnjava222.zoomanagement.zoo.truck;

import org.springframework.stereotype.Service;

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

    public boolean deleteTruck(String truckToDelete) {
        boolean doesTruckExist = truckRepo.existsById(truckToDelete);
        return doesTruckExist ? true : false;

    }
}
