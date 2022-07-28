package de.neuefische.cgnjava222.zoomanagement.zoo.truck;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class TruckRepo {
    private final List<Truck> trucks = new ArrayList<>(

            List.of(
            new Truck("Currywurst Hannes"),
            new Truck("Margrets Gesunde Küche"),
            new Truck("Annes knusprige Pommes")
    ));

    public Truck addTruck(String name) {
       Truck truck = new Truck(name);
       trucks.add(truck);
       return truck;
    }

    public List<Truck> getTrucks() {
        return trucks;
    }
}
