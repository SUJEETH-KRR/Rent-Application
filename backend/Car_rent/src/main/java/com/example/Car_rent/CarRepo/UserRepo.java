package com.example.Car_rent.CarRepo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Car_rent.Modal.User;

public interface UserRepo extends JpaRepository<User, Integer> {

	Optional<User> findByUsername(String username);
}
