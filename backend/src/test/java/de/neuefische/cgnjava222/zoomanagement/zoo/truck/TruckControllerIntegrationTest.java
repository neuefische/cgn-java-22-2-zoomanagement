package de.neuefische.cgnjava222.zoomanagement.zoo.truck;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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
                                "name":"Dner1",
                                "id":""
                                }
                                """)
                )
                .andExpect(status().is(200))
                .andReturn();
        String content = result.getResponse().getContentAsString();
        Assertions.assertTrue(content.contains("Dner1"));
    }
}
