package de.neuefische.cgnjava222.zoomanagement.zoo.employee;


import com.fasterxml.jackson.databind.ObjectMapper;
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
class EmployeeControllerIntegrationTest {
    @Autowired
    ObjectMapper objectMapper;
    @Autowired
    MockMvc mockMvc;


    @Test
    void testGetAllEmployees() throws Exception {
        mockMvc.perform(get("/api/employees")).andExpect(status().is(200))
                .andExpect(jsonPath("$", hasSize(0)))
                .andExpect(content().json("""
                        []
                        """));
    }

    @DirtiesContext
    @Test
    void addEmployee() throws Exception {
        mockMvc.perform(post(
                        "/api/employees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"name": "Hainz Ketchup"}
                                """)
                )
                .andExpect(status().is(201))
                .andExpect(content().json("""
                        {
                        "name": "Hainz Ketchup"
                        }
                        """));
    }

    @DirtiesContext
    @Test
    void deleteEmployee() throws Exception {

        String saveResult = mockMvc.perform(post(
                "/api/employees")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {"name": "Hainz Ketchup"}
                        """)
        ).andReturn().getResponse().getContentAsString();

        Employee saveResultEmployee = objectMapper.readValue(saveResult, Employee.class);
        String id = saveResultEmployee.id();

        mockMvc.perform(delete("http://localhost:8080/api/employees/" + id))
                .andExpect(status().is(204));

        mockMvc.perform(get("http://localhost:8080/api/employees"))
                .andExpect(status().is(200))
                .andExpect(content().json("""
                        []
                        """));
    }

    @DirtiesContext
    @Test
    void deleteEmployeeNoExist() throws Exception {

        String id="2003";
        mockMvc.perform(delete("http://localhost:8080/api/employees/" + id))
                .andExpect(status().is(404));
    }
}
