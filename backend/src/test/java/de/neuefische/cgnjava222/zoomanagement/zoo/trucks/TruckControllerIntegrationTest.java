package de.neuefische.cgnjava222.zoomanagement.zoo.trucks;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class TruckControllerIntegrationTest {

    @Autowired
    MockMvc mockMvc;


    @Test
    void getAllTrucks() throws Exception {
        mockMvc.perform(get("/trucks"))
                .andExpect(status().is(200));
    }
}
