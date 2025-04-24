package com.example.Car_rent.CarRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Car_rent.Modal.CarBook_Details;

public interface CarBookingRepo extends JpaRepository<CarBook_Details, Integer>{

}
