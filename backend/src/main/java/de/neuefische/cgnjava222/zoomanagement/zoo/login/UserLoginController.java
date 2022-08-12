package de.neuefische.cgnjava222.zoomanagement.zoo.login;

import de.neuefische.cgnjava222.zoomanagement.zoo.security.ZooUser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users/newuser")
public class UserLoginController {
    private final UserLoginService userLoginService;

    public UserLoginController(UserLoginService userLoginService) {
        this.userLoginService = userLoginService;
    }

    @PostMapping
    public ResponseEntity<String> addUser(@RequestBody ZooUser userToAdd){

        String nameOfNewUser=userLoginService.addNewUser(userToAdd);

        if(nameOfNewUser==null){
            return  ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(null);
        }
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(nameOfNewUser);



    }
}
