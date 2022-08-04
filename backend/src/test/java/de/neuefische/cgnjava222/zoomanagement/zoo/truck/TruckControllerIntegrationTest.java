package de.neuefische.cgnjava222.zoomanagement.zoo.truck;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class TruckControllerIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;


    @Test
    void getAllTrucks() throws Exception {
        mockMvc.perform(get("/api/trucks"))
                .andExpect(status().is(200))
                .andExpect(jsonPath("$", hasSize(0)));
    }

    @Test
    void addTrucks_wrongJson() throws Exception {
        mockMvc.perform(post("/api/trucks")
                        .contentType(APPLICATION_JSON)
                        .content("""
                                "Dner1"
                                """)
                )
                .andExpect(status().is(400));
    }

    @Test
    void addTrucks() throws Exception {
        MvcResult result = mockMvc.perform(post("/api/trucks")
                        .contentType(APPLICATION_JSON)
                        .content("""
                                {
                                "name":"Dner1"
                                }
                                """)
                )
                .andExpect(status().is(201))
                .andReturn();
        String content = result.getResponse().getContentAsString();
        Assertions.assertTrue(content.contains("Dner1"));
    }


    @DirtiesContext
    @Test
    void deleteTrucks() throws Exception {

        String saveResult = mockMvc.perform(post(
                "/api/trucks")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {"name": "Foodtruck"}
                        """)
        ).andReturn().getResponse().getContentAsString();

        Truck saveResultTruck = objectMapper.readValue(saveResult, Truck.class);
        String id = saveResultTruck.id();

        mockMvc.perform(delete("http://localhost:8080/api/trucks/" + id))
                .andExpect(status().is(204));

        mockMvc.perform(get("http://localhost:8080/api/trucks"))
                .andExpect(status().is(200))
                .andExpect(content().json("""
                        []
                        """));
    }

}
