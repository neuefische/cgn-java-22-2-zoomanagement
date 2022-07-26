package de.neuefische.cgnjava222.zoomanagement.zoo.hello;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping(path = "/hello")
    String sayHello() {
        return "Hallo";
    }
}
