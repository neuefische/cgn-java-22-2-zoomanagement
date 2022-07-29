package de.neuefische.cgnjava222.zoomanagement.zoo.trucks;

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
}