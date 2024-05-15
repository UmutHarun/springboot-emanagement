package com.emanagement.management.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.emanagement.management.Model.MyUser;
import com.emanagement.management.Repository.MyUserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RegistrationController {

    @Autowired
    private MyUserRepository myUserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register/user")
    public MyUser createUser(@RequestBody MyUser user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        // myUserRepository.findByUsername(user.getUsername());
        return myUserRepository.save(user);
    }
    
    @PostMapping("/login/user")
    public ResponseEntity<?> loginUser(@RequestBody MyUser user) {
        Optional<MyUser> loggedUser = myUserRepository.findByUsername(user.getUsername());

        if(loggedUser.isEmpty()){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User is not found");
        }
    
        MyUser foundUser = loggedUser.get();
        if(passwordEncoder.matches(user.getPassword(), foundUser.getPassword())){
            return ResponseEntity.status(HttpStatus.OK).body("success");
        }
    
        return ResponseEntity.status(HttpStatus.CONFLICT).body("User is not found");
    }
}
