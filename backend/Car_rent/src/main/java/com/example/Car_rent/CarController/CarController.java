package com.example.Car_rent.CarController;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.Car_rent.CarService.CarService;
import com.example.Car_rent.Modal.CarBook_Details;
import com.example.Car_rent.Modal.Car_Details;
import com.example.Car_rent.Modal.Modal;
import com.razorpay.RazorpayException;

@RestController
@CrossOrigin
@RequestMapping("/api/")
public class CarController {
	
	@Autowired
	private CarService service;
	
	@RequestMapping("/sujeeth")
	public String greet() {
		return "Sujeeth";
	}
	
//	@GetMapping("/login")
//	public String login() {
//		return "login";
//	}
//	
//	@GetMapping("/home")
//    public String homePage() {
//        return "home"; // This would be the page after successful login
//    }
	
	@GetMapping("/car")
	public ResponseEntity<List<Car_Details>> getCarDetails() {
		return new ResponseEntity<>(service.getCarDetails(), HttpStatus.OK);
	}
	
	@GetMapping("/car/{id}")
	public ResponseEntity<Car_Details> getCarDetailsById(@PathVariable int id) {
		Car_Details car = service.getCarDetailsById(id);
		if(car != null)
			return new ResponseEntity<>(car, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PostMapping("/car")
	public ResponseEntity<?> addCarDetails(@RequestPart Car_Details car, @RequestPart MultipartFile imageFile, @RequestPart MultipartFile brandFile) {
		Car_Details addcar;
		try {
			addcar = service.addCarDetails(car, imageFile, brandFile);
			return new ResponseEntity<>(addcar, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
		
	@PutMapping("/car/{id}")
	public ResponseEntity<?> updateCarDetails(@PathVariable int id, @RequestPart Car_Details car, @RequestPart MultipartFile imageFile, @RequestPart MultipartFile brandFile) throws IOException {
		Car_Details updateCar = service.updateCarDetails(id, car, imageFile, brandFile);
		if(car != null) {
			return new ResponseEntity<>(updateCar, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
//	@GetMapping("/car/{id}/image")
//	public ResponseEntity<byte[]> getImagebyId(@PathVariable int id) {
//		Car_Details car = service.getCarDetailsById(id);
//		byte[] imageFile = car.getImageData();
//		return ResponseEntity.ok().contentType(MediaType.valueOf(car.getImageType())).body(imageFile);
//	}
	
//	@GetMapping("/car/{id}/image")
//	public ResponseEntity<byte[]> getImagebyId(@PathVariable int id) {
//	    Car_Details car = service.getCarDetailsById(id);
//	    if (car != null && car.getImageData() != null) {
//	        return ResponseEntity.ok()
//	            .contentType(MediaType.valueOf(car.getImageType() != null ? car.getImageType() : "image/jpeg"))
//	            .body(car.getImageData());
//	    } else {
//	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//	    }
//	}
	
	@DeleteMapping("/car/{id}")
	public ResponseEntity<?> deleteCarDetailsById(@PathVariable int id) {
		Car_Details car = service.getCarDetailsById(id);
		if(car != null) {
			service.deleteCarDetailsById(id);
			return new ResponseEntity<>("Deleted", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Not found", HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/create-order")
	public String createRentOrder(@RequestBody Map<String, Object> payload) throws RazorpayException {
	    int amount = ((Number) payload.get("amount")).intValue(); // safe cast
	    String currency = (String) payload.get("currency");

	    return service.createRentOrder(amount, currency, "Rent-101");
	} // Razorpay order creation Controller
	
	@PostMapping("/bookings")
	public CarBook_Details carBooking(@RequestPart CarBook_Details bookingDetails, @RequestPart String imageType, @RequestPart String imageData) throws IOException {
		return service.carBooking(bookingDetails, imageType, imageData);
	}

}
