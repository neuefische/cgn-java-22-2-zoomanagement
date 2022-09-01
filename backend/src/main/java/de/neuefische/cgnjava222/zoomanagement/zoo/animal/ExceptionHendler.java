package de.neuefische.cgnjava222.zoomanagement.zoo.animal;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionHendler {

    @ExceptionHandler(AnimalNotFoundException.class)
    public ResponseEntity handleAnimalNotFoundException

}
