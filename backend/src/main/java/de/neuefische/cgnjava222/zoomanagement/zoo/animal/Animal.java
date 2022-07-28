package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.springframework.data.annotation.Id;

public record Animal(@Id String id, String name) {

}
