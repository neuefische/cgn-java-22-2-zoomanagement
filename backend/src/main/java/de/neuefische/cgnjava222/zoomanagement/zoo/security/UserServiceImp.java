package de.neuefische.cgnjava222.zoomanagement.zoo.security;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserServiceImp implements UserDetailsService {

    private final ZooUserRepo zooUserRepo;



    public UserServiceImp(ZooUserRepo zooUserRepo) {
        this.zooUserRepo = zooUserRepo;

    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        ZooUser zooUser=zooUserRepo.findById(username).orElse(null);


        if (zooUser == null) {
            return null;
        }
        return new User(zooUser.username(), zooUser.password(), Collections.emptyList());
    }
}
