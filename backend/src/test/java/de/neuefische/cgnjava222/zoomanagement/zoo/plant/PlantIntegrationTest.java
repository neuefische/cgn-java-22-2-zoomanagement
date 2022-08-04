package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class PlantIntegrationTest {

    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;
    @Test
    @DirtiesContext
    void getPlants() throws Exception {

        mockMvc
                .perform(
                        get("/api/plants")
                )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(0)));
    }

    @Test
    @DisplayName("addOnePlant")
    @DirtiesContext
    void addOnePlant() throws Exception {
        mockMvc
                .perform(post("/api/plants")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                 {"name": "Birke"}
                                """))
                .andExpect(status().is(201));
        mockMvc.perform(
                        get("/api/plants")
                )
                .andExpect(status().is(200))
                .andExpect(jsonPath("$", hasSize(1)));
    }

    @Test
    @DisplayName("addTwoPlants")
    @DirtiesContext
    void addTwoPlants() throws Exception {
        mockMvc
                .perform(post("/api/plants")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                 {"name": "Birke"},
                                """)
                )
                .andExpect(status().is(201));
        mockMvc
                .perform(post("/api/plants")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                 {"name": "Buche"},
                                """)
                )
                .andExpect(status().is(201));
        mockMvc.perform(
                        get("/api/plants")
                )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }

    @DirtiesContext
    @Test
    void deletePlant() throws Exception {

        String saveResult = mockMvc.perform(post(
                "/api/plants")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {"name": "Pflanzen"}
                        """)
        ).andReturn().getResponse().getContentAsString();

        Plant saveResultPlant = objectMapper.readValue(saveResult, Plant.class);
        String id = saveResultPlant.id();

        mockMvc.perform(delete("http://localhost:8080/api/plants/" + id))
                .andExpect(status().is(204));

        mockMvc.perform(get("http://localhost:8080/api/plants"))
                .andExpect(status().is(200))
                .andExpect(content().json("""
                        []
                        """));
    }

    @DirtiesContext
    @Test
    void deleteNoPlantExists() throws Exception {

        String id="2";
        mockMvc.perform(delete("http://localhost:8080/api/plants/" + id))
                .andExpect(status().is(404));
    }

    @Test
    @DirtiesContext
    void getPlantById() throws Exception {

        String saveResult = mockMvc.perform(post(
                "/api/plants")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {"name": "Pflanzen"}
                        """)
        ).andReturn().getResponse().getContentAsString();

        Plant saveResultPlant = objectMapper.readValue(saveResult, Plant.class);
        String id = saveResultPlant.id();

        String teststring = objectMapper.writer().writeValueAsString(saveResultPlant);
        System.out.println(teststring);
        mockMvc
                .perform(
                        get("/api/plants/" + id)
                )
                .andExpect(status().isOk())
                .andExpect(content().json(teststring));
    }
}
