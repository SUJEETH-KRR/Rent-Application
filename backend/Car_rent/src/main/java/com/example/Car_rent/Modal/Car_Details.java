package com.example.Car_rent.Modal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Table(name="Car_Details")
@Entity
public class Car_Details {

	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id; //identity
	private String brand_name; //Car brand name
	private String model; //Car model
	
	@Column(nullable = false, columnDefinition="tinyint(1)")
	private boolean available; //Availability T or F
	private double rent_price; //Rent price
	private String fuel_type; // Petrol / Diesel / EV
	private String gear_shift; // manual / automatic
	private int seat;
	
	private String imageName; //Car image name [abc.png]
    private String imageType; //file storage type [.png]
    
    @Lob
    private byte[] imageData; //image as bits
    
    private String brand_image_name;
    private String brand_imageType;
    
    @Lob
    private byte[] brand_imageData; //image as bits

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBrand_name() {
		return brand_name;
	}

	public void setBrand_name(String brand_name) {
		this.brand_name = brand_name;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public boolean isAvailable() {
		return available;
	}

	public void setAvailable(boolean available) {
		this.available = available;
	}

	public double getRent_price() {
		return rent_price;
	}

	public void setRent_price(double rent_price) {
		this.rent_price = rent_price;
	}

	public String getFuel_type() {
		return fuel_type;
	}

	public void setFuel_type(String fuel_type) {
		this.fuel_type = fuel_type;
	}

	public String getGear_shift() {
		return gear_shift;
	}

	public void setGear_shift(String gear_shift) {
		this.gear_shift = gear_shift;
	}

	public int getSeat() {
		return seat;
	}

	public void setSeat(int seat) {
		this.seat = seat;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public String getImageType() {
		return imageType;
	}

	public void setImageType(String imageType) {
		this.imageType = imageType;
	}

	public byte[] getImageData() {
		return imageData;
	}

	public void setImageData(byte[] imageData) {
		this.imageData = imageData;
	}

	public String getBrand_image_name() {
		return brand_image_name;
	}

	public void setBrand_image_name(String brand_image_name) {
		this.brand_image_name = brand_image_name;
	}

	public String getBrand_imageType() {
		return brand_imageType;
	}

	public void setBrand_imageType(String brand_imageType) {
		this.brand_imageType = brand_imageType;
	}

	public byte[] getBrand_imageData() {
		return brand_imageData;
	}

	public void setBrand_imageData(byte[] brand_imageData) {
		this.brand_imageData = brand_imageData;
	}

	/**
	 * @param id
	 * @param brand_name
	 * @param model
	 * @param available
	 * @param rent_price
	 * @param fuel_type
	 * @param gear_shift
	 * @param seat
	 * @param imageName
	 * @param imageType
	 * @param imageData
	 * @param brand_image_name
	 * @param brand_imageType
	 * @param brand_imageData
	 */
	public Car_Details(int id, String brand_name, String model, boolean available, double rent_price, String fuel_type,
			String gear_shift, int seat, String imageName, String imageType, byte[] imageData, String brand_image_name,
			String brand_imageType, byte[] brand_imageData) {
		super();
		this.id = id;
		this.brand_name = brand_name;
		this.model = model;
		this.available = available;
		this.rent_price = rent_price;
		this.fuel_type = fuel_type;
		this.gear_shift = gear_shift;
		this.seat = seat;
		this.imageName = imageName;
		this.imageType = imageType;
		this.imageData = imageData;
		this.brand_image_name = brand_image_name;
		this.brand_imageType = brand_imageType;
		this.brand_imageData = brand_imageData;
	}

	/**
	 * 
	 */
	public Car_Details() {
		super();
	}
	
	
	
}
