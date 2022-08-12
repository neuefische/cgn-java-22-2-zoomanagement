package de.neuefische.cgnjava222.zoomanagement.zoo.login;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class UserLoginIntegrationTest {

    @Autowired
    MockMvc mockMvc;
    @Test
    void addUserPass() throws Exception {
        MvcResult result=mockMvc.perform(post("/api/newuser")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {
                        "username":"Hansi",
                        "password":"Hansi123"
                        }
                        """))
                .andExpect(status().is(201))
                .andReturn();
        String newUser=result.getResponse().getContentAsString();
        Assertions.assertEquals("Hansi",newUser);


    }

    @Test
    void addUserFail() throws Exception {
        MvcResult restult1=   mockMvc.perform(post("/api/newuser")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {
                        "username":"Hansi",
                        "password":"Hansi122"
                        }
                        """))
                .andExpect(status().is(201))
                .andReturn();

        MvcResult result=mockMvc.perform(post("/api/newuser")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                        {
                        "username":"Hansi",
                        "password":"Hansi123"
                        }
                        """))
                .andExpect(status().is(404))
                .andReturn();
        String newUser=result.getResponse().getContentAsString();
        System.out.println(newUser);
        Assertions.assertEquals("",newUser);


    }
}