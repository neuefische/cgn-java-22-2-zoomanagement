package de.neuefische.cgnjava222.zoomanagement.zoo.security;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class ZooRunner implements ApplicationRunner {

    private final PasswordEncoder passwordEncoder;

    private final ZooUserRepo zooUserRepo;

    public ZooRunner(PasswordEncoder passwordEncoder, ZooUserRepo zooUserRepo) {
        this.passwordEncoder = passwordEncoder;
        this.zooUserRepo = zooUserRepo;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {


        ZooUser zooUser = zooUserRepo.findById("frank").orElse(

            zooUserRepo.save( new ZooUser("frank2.0", passwordEncoder.encode("frank123")))

        );

        System.out.println(zooUser);




    }
}
