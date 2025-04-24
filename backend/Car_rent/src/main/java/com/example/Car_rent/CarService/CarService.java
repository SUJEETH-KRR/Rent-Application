package com.example.Car_rent.CarService;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.Car_rent.CarRepo.CarBookingRepo;
import com.example.Car_rent.CarRepo.CarRepo;
import com.example.Car_rent.Modal.CarBook_Details;
import com.example.Car_rent.Modal.Car_Details;
import com.example.Car_rent.Modal.Modal;
import com.fasterxml.jackson.databind.deser.Deserializers.Base;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

//@Component
@Service
public class CarService {
	
	@Autowired
	private CarRepo repo;
	
	@Autowired
	private CarBookingRepo carBookingRepo;
	
	public List<Car_Details> getCarDetails() {
		return repo.findAll();
	}
	
	public Car_Details getCarDetailsById(int id) {
		return repo.findById(id).orElse(null);
	}
	
	public Car_Details addCarDetails(Car_Details car, MultipartFile imageFile, MultipartFile brandFile) throws IOException {
		car.setImageName(imageFile.getOriginalFilename());
		car.setImageType(imageFile.getContentType());
		car.setImageData(imageFile.getBytes());
		
		car.setBrand_image_name(brandFile.getOriginalFilename());
		car.setBrand_imageType(brandFile.getContentType());
		car.setBrand_imageData(brandFile.getBytes());
		return repo.save(car);
	}
	
	public Car_Details updateCarDetails(int id, Car_Details car, MultipartFile imageFile, MultipartFile brandFile) throws IOException {
		car.setId(id);
		car.setImageName(imageFile.getOriginalFilename());
		car.setImageType(imageFile.getContentType());
		car.setImageData(imageFile.getBytes());
		
		car.setBrand_image_name(brandFile.getOriginalFilename());
		car.setBrand_imageType(brandFile.getContentType());
		car.setBrand_imageData(brandFile.getBytes());
		return repo.save(car);
	}
	
	public void deleteCarDetailsById(int id) {
		repo.deleteById(id);
	}
	
	@Value("${razorpay.api.key}")
	private String apiKey;
	
	@Value("${razorpay.api.secret}")
	private String apiSecret;
	
	public String createRentOrder(int amount, String currency, String receiptId) throws RazorpayException {
		RazorpayClient razorpayClient = new RazorpayClient(apiKey, apiSecret);
		
		JSONObject orderRequest = new JSONObject();
		orderRequest.put("amount", amount * 100);
		orderRequest.put("currency", currency);
		orderRequest.put("receipt", receiptId);
		
		Order order = razorpayClient.orders.create(orderRequest);
		
		return order.toString();
	}
	
	public CarBook_Details carBooking(CarBook_Details carBooking, String imageType, String imageData) throws IOException {
		carBooking.setImageType(imageType);
		byte[] imageBase64 = Base64.getDecoder().decode(imageData);
		carBooking.setImageData(imageBase64);
		return carBookingRepo.save(carBooking);
	}
	
	
}
