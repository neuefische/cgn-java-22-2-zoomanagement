package de.neuefische.cgnjava222.zoomanagement.zoo.trucks;

import java.util.List;

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
