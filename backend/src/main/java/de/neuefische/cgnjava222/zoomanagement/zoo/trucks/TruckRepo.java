package de.neuefische.cgnjava222.zoomanagement.zoo.trucks;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TruckRepo {
    private final List<Truck> trucks = List.of(
            new Truck("Currywurst Hannes"),
            new Truck("Margrets Gesunde Küche"),
            new Truck("Annes knusprige Pommes")
    );

    public List<Truck> getTrucks() {
        return trucks;
    }
}
