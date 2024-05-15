package com.emanagement.management.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emanagement.management.Model.MyUser;

@Repository
public interface MyUserRepository extends JpaRepository<MyUser,Integer> {
    Optional<MyUser> findByUsername(String username);
}
