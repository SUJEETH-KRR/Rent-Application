import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CarCard from "./CarCard";
import axios from "axios";
import loading_gif from "../Images/loading.gif";

function Cars() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/car")
      .then((res) => {
        // console.log(res.data.available);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="loading-container d-flex justify-content-center align-items-center vh-100">
        <img
          src={loading_gif}
          alt="Loading . . ."
          style={{ width: "75px", height: "auto" }}
        />
      </div>
    );

  if (error)
    return (
      <div className="loading-container d-flex justify-content-center align-items-center vh-100">
        <h3>Error: {error.message} 😓</h3>
      </div>
    );

  return (
    <div>
      <div className="d-flex border border-black p-3 justify-content-end">
        <div>User name</div>
        <div className="ms-3">
          <i className="bi bi-person"></i>
        </div>
      </div>
      <div className="border border-black mt-4">
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {data.map((car) => (
            <CarCard
              key={car.id}
              car_id={car.id}
              car_brand_image={`data:${car.brand_imageType};base64,${car.brand_imageData}`}
              car_brand_name={car.brand_name}
              car_image={`data:${car.imageType};base64,${car.imageData}`}
              car_model={car.model}
              car_fuel={car.fuel_type}
              car_gear={car.gear_shift}
              car_seat={car.seat}
              isAdmin={false}
              available={car.available}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cars;
