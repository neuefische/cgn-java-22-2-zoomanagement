package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class AnimalIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @DirtiesContext
    @Test
    void listAnimals() throws Exception {

        mockMvc.perform(get("/api/animals"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        [{"id":"1","name":"Eisbär"},{"id":"2","name":"Tiger"},{"id":"3","name":"Giraffe"}]
                        """));
    }
}