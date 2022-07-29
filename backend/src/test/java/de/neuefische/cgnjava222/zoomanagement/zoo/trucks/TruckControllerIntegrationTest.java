package de.neuefische.cgnjava222.zoomanagement.zoo.trucks;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class TruckControllerIntegrationTest {

    @Autowired
    MockMvc mockMvc;


    @Test
    void getAllTrucks() throws Exception {
        mockMvc.perform(get("/api/trucks"))
                .andExpect(status().is(200))
                .andExpect(jsonPath("$", hasSize(0)));
    }
}
