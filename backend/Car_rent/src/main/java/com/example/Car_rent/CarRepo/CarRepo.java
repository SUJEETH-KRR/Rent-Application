package com.example.Car_rent.CarRepo;

import java.sql.SQLData;

import org.hibernate.annotations.processing.SQL;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Car_rent.Modal.Car_Details;

@Repository
public interface CarRepo extends JpaRepository<Car_Details, Integer> {

	
}
