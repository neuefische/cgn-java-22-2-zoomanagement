package de.neuefische.cgnjava222.zoomanagement.zoo.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/users")
public class ZooUserController {

    @GetMapping(path = "/login")
    String login() {
        return getUsername();
    }

    @GetMapping(path = "/me")
    String getUsername() {

        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }

    @GetMapping(path = "/logout")
    void logout(HttpSession session) {
        session.invalidate();
    }


}
