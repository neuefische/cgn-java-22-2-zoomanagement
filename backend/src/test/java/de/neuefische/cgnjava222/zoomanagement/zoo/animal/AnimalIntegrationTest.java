package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.tomakehurst.wiremock.junit5.WireMockTest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static com.github.tomakehurst.wiremock.client.WireMock.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WireMockTest(httpPort = 1234)
@SpringBootTest
@AutoConfigureMockMvc
class AnimalIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @DirtiesContext
    @Test
    void listAnimals() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders.get("/api/animals"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));
    }

    @DirtiesContext
    @Test
    void addAnimal() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders.post(
                                "/api/animals")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"name": "Schmetterlong"}
                                """)
                )
                .andExpect(status().is(201))
                .andExpect(content().json("""
                        {
                        "name": "Schmetterlong"
                        }
                        """));

    }

    @DirtiesContext
    @Test
    void deleteAnimal() throws Exception {
        String saveResult = mockMvc.perform(MockMvcRequestBuilders.post(
                                "/api/animals")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"name": "Katze"}
                                """)
                ).andReturn()
                .getResponse()
                .getContentAsString();

        Animal saveResultAnimal = objectMapper.readValue(saveResult, Animal.class);
        String id = saveResultAnimal.id();

        mockMvc.perform(MockMvcRequestBuilders.delete("http://localhost:8080/api/animals/" + id))
                .andExpect(status().is(204));

        mockMvc.perform(MockMvcRequestBuilders.get("http://localhost:8080/api/animals"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));
    }

    @DirtiesContext
    @Test
    void deleteAnimalDoesNotExist() throws Exception {

        String id = "111";
        mockMvc.perform(MockMvcRequestBuilders.delete("http://localhost:8080/api/animals/" + id))
                .andExpect(status().is(404));
    }

    @DirtiesContext
    @Test
    void animalsFromApi() throws Exception {
        stubFor(get("/")
                .willReturn(aResponse().withStatus(200).withBody("""
                                ["Coala", "Panda", "Tiger", "Penguin"]
                                """)
                        .withHeader("Content-Type", MediaType.APPLICATION_JSON_VALUE)));

        mockMvc.perform(MockMvcRequestBuilders.get("/api/animals/apianimals"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        ["Coala", "Panda", "Tiger", "Penguin"]
                        """));

    }

}
