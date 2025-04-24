package com.example.Car_rent.Modal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

@ToString
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarBook_Details {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String brandName; // Car brand name
	private String model; // Car model

	private double rentPrice; // Rent price

	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")
	private Date startDate;

	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")
	private Date endDate;

	private String paymentId;

	private String imageType; // file storage type [.png]

	@Lob
	private byte[] imageData;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public double getRentPrice() {
		return rentPrice;
	}

	public void setRentPrice(double rentPrice) {
		this.rentPrice = rentPrice;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
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

	/**
	 * @param id
	 * @param brandName
	 * @param model
	 * @param rentPrice
	 * @param startDate
	 * @param endDate
	 * @param paymentId
	 * @param imageType
	 * @param imageData
	 */
	public CarBook_Details(int id, String brandName, String model, double rentPrice, Date startDate, Date endDate,
			String paymentId, String imageType, byte[] imageData) {
		super();
		this.id = id;
		this.brandName = brandName;
		this.model = model;
		this.rentPrice = rentPrice;
		this.startDate = startDate;
		this.endDate = endDate;
		this.paymentId = paymentId;
		this.imageType = imageType;
		this.imageData = imageData;
	}

	/**
	 * 
	 */
	public CarBook_Details() {
		super();
	}

}
