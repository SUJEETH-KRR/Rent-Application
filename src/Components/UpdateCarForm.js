import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UpdateCarForm({
  brand,
  model,
  fuel_type,
  gear_shift,
  seats,
  isavailable,
  rent_price,
  car_id,
  isEdit,
  onSuccess,
}) {
  // const [formData, setFormData] = useState({
  //   brand_name: brand,
  //   brandImage: null,
  //   model_name: model,
  //   carImage: null,
  //   fuelType: fuel_type,
  //   gearType: gear_shift,
  //   seat: seats,
  //   available: isavailable,
  //   price: rent_price,
  // });

  const [formData, setFormData] = useState({
    brand_name: brand || "",
    brandImage: null,
    model_name: model || "",
    carImage: null,
    fuelType: fuel_type || "",
    gearType: gear_shift || "",
    seat: seats || "",
    available: isavailable || false,
    price: rent_price || "",
  });

  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({
    brandImage: false,
    carImage: false,
    fuelType: false,
    gearType: false,
    available: false,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for required fields
    let errors = {};

    if (!formData.brand_name) errors.brand_name = true;
    if (!formData.model_name) errors.model_name = true;
    if (!formData.seat) errors.seat = true;
    if (!formData.price) errors.price = true;

    if (!formData.brandImage) errors.brandImage = true;
    if (!formData.carImage) errors.carImage = true;

    if (!formData.fuelType) errors.fuelType = true;
    if (!formData.gearType) errors.gearType = true;
    if (!formData.available) errors.available = true;

    setFormErrors(errors);

    const formDataToSend = new FormData();

    const carDetails = {
      brand_name: formData.brand_name,
      model: formData.model_name,
      fuel_type: formData.fuelType,
      gear_shift: formData.gearType,
      seat: formData.seat,
      available: formData.available,
      rent_price: formData.price,
    };

    formDataToSend.append(
      "car",
      new Blob([JSON.stringify(carDetails)], { type: "application/json" })
    );

    // Append files
    if (formData.carImage) {
      formDataToSend.append("imageFile", formData.carImage);
    }
    if (formData.brandImage) {
      formDataToSend.append("brandFile", formData.brandImage);
    }

    try {
      const response = isEdit
        ? await axios.put(
            `http://localhost:8080/api/car/${car_id}`,
            formDataToSend,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
        : await axios.post(`http://localhost:8080/api/car`, formDataToSend, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

      if (onSuccess) onSuccess();
      navigate("/admin", { replace: true });

      console.log("Update successful:", response.data);
      // Optionally: close form or refresh data
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <form
        className="p-4 border shadow rounded bg-white"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="d-flex gap-5">
          <div className="mb-3">
            <label htmlFor="brand_name" className="form-label">
              <strong>Brand</strong>
            </label>
            <input
              type="text"
              id="brand_name"
              name="brand_name"
              className="form-control"
              placeholder="Enter brand_name name"
              value={formData.brand_name}
              onChange={handleChange}
              required
            />
            {formErrors.brand_name && (
              <div className="text-danger">brand_name is required</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="brandImage" className="form-label">
              <strong>Brand Image</strong>
            </label>
            <input
              type="file"
              id="brandImage"
              name="brandImage"
              className="form-control"
              onChange={handleChange}
              accept="image/*"
              required
            />
            {formErrors.brandImage && (
              <div className="text-danger">brand_name image is required</div>
            )}
          </div>
        </div>

        <div className="d-flex gap-5">
          <div className="mb-3">
            <label htmlFor="model_name" className="form-label">
              <strong>Model</strong>
            </label>
            <input
              type="text"
              id="model_name"
              name="model_name"
              className="form-control"
              placeholder="Enter model_name name"
              value={formData.model_name}
              onChange={handleChange}
              required
            />
            {formErrors.model_name && (
              <div className="text-danger">model_name is required</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="carImage" className="form-label">
              <strong>Car Image</strong>
            </label>
            <input
              type="file"
              id="carImage"
              name="carImage"
              className="form-control"
              onChange={handleChange}
              accept="image/*"
              required
            />
            {formErrors.carImage && (
              <div className="text-danger">Car image is required</div>
            )}
          </div>
        </div>

        <div className="mb-4"></div>

        <div className="d-flex gap-5">
          <div className="d-flex flex-column mb-3">
            <label className="form-label">
              <strong>Fuel Type</strong>
            </label>
            {["Petrol", "Diesel", "EV"].map((type) => (
              <div className="form-check" key={type}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="fuelType"
                  id={type}
                  value={type}
                  checked={formData.fuelType === type}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              </div>
            ))}
            {formErrors.fuelType && (
              <div className="text-danger">Fuel type is required</div>
            )}
          </div>

          <div className="d-flex flex-column mb-3">
            <label className="form-label">
              <strong>Gear Type</strong>
            </label>
            {["Manual", "Automatic"].map((type) => (
              <div className="form-check" key={type}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gearType"
                  id={type}
                  value={type}
                  checked={formData.gearType === type}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              </div>
            ))}
            {formErrors.gearType && (
              <div className="text-danger">Gear type is required</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="seat" className="form-label">
              <strong>Seat</strong>
            </label>
            <input
              type="number"
              id="seat"
              name="seat"
              className="form-control"
              placeholder="Enter number of seats"
              value={formData.seat}
              onChange={handleChange}
              required
            />
            {formErrors.seat && (
              <div className="text-danger">Seat is required</div>
            )}
          </div>
        </div>

        <div className="d-flex gap-5">
          <div className="d-flex flex-column mb-3">
            <label className="form-label">
              <strong>Available</strong>
            </label>
            {["true", "false"].map((val) => (
              <div className="form-check" key={val}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="available"
                  id={val}
                  value={val}
                  checked={formData.available === val}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor={val}>
                  {val === "true" ? "Yes" : "No"}
                </label>
              </div>
            ))}
            {formErrors.available && (
              <div className="text-danger">Availability is required</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              <strong>Rent Price</strong>
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="form-control"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
              required
            />
            {formErrors.price && (
              <div className="text-danger">Price is required</div>
            )}
          </div>
        </div>

        <div>
          <Button className="w-100" variant="danger" type="submit">
            {isEdit ? "Update Car" : "Add Car"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UpdateCarForm;
