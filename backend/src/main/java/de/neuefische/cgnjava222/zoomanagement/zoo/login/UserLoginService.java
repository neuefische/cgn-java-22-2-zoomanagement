package de.neuefische.cgnjava222.zoomanagement.zoo.login;

import de.neuefische.cgnjava222.zoomanagement.zoo.security.ZooUser;
import de.neuefische.cgnjava222.zoomanagement.zoo.security.ZooUserRepo;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserLoginService {
    private final ZooUserRepo zooUserRepo;


    public UserLoginService(ZooUserRepo zooUserRepo) {
        this.zooUserRepo = zooUserRepo;
    }

     BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();


    public String addNewUser(ZooUser zooUser){
        if(zooUserRepo.existsById(zooUser.username())){return null;}
        ZooUser userToAdd=new
                ZooUser(zooUser.username(), bCryptPasswordEncoder.encode(zooUser.password()));


        ZooUser newUser=zooUserRepo.save(userToAdd);
        return newUser.username();
    }


}
