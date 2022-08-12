package de.neuefische.cgnjava222.zoomanagement.zoo.animal;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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

        mockMvc.perform(get("/api/animals"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));
    }

    @DirtiesContext
    @Test
    void addAnimal() throws Exception {

        mockMvc.perform(post(
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
        String saveResult = mockMvc.perform(post(
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

        mockMvc.perform(delete("http://localhost:8080/api/animals/" + id))
                .andExpect(status().is(204));

        mockMvc.perform(get("http://localhost:8080/api/animals"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));
    }

    @DirtiesContext
    @Test
    void deleteAnimalDoesNotExist() throws Exception {

        String id = "111";
        mockMvc.perform(delete("http://localhost:8080/api/animals/" + id))
                .andExpect(status().is(404));
    }

    @DirtiesContext
    @Test
    void addPosition() throws Exception {
        String saveResult = mockMvc.perform(post(
                        "/api/animals")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"name": "Katze"}
                                """)
                )
                .andReturn()
                .getResponse()
                .getContentAsString();

        Animal saveResultAnimal = objectMapper.readValue(saveResult, Animal.class);
        String id = saveResultAnimal.id();

        mockMvc.perform(put("/api/animals/" + id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                "id": "<ID>",
                                "name": "Katze",
                                "position":
                                    {"x": "5",
                                    "y": "6"
                                    }
                                }
                                """.replaceFirst("<ID>", id))
                ).andExpect(status().isOk())
                .andExpect(content().json("""
                        {
                        "name": "Katze",
                        "position": {
                        "x": "5",
                        "y": "6"},
                        "id": "<ID>"
                        }
                        """.replaceFirst("<ID>", id)));
    }

    @DirtiesContext
    @Test
    void addEmoji() throws Exception {
        String saveResult = mockMvc.perform(post(
                        "/api/animals/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"name": "Katze"}
                                """)
                )
                .andReturn()
                .getResponse()
                .getContentAsString();

        Animal saveResultAnimal = objectMapper.readValue(saveResult, Animal.class);
        String id = saveResultAnimal.id();

        mockMvc.perform(put("/api/animals/emoji/" + id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                "id": "<ID>",
                                "name": "Katze",
                                "emoji" : {"emoji": "&#128513"}}
                                """.replaceFirst("<ID>", id))
                ).andExpect(status().isOk())
                .andExpect(content().json("""
                        {
                        "id": "<ID>",
                        "name": "Katze",
                        "emoji" : {"emoji": "&#128513"}}
                        """.replaceFirst("<ID>", id)));
    }

}
