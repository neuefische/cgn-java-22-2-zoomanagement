package de.neuefische.cgnjava222.zoomanagement.zoo.plant;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class PlantIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    @DirtiesContext
    void isGetPlantsListSize0() throws Exception {

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
    void addOnePlantAndCheckTheReturnLengthIfIt1() throws Exception {
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
    void addTwoPlantsAndCheckTheReturnLengthIfIt2() throws Exception {
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
}
