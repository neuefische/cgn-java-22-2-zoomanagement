package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class PlantIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    @DirtiesContext
    void isGetPlantsListSize2() throws Exception {

        mockMvc
                .perform(
                        get("/api/plants")
                )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(0)));
    }
}