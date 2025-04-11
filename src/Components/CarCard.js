import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CarCard({
  car_id,
  car_brand_image,
  car_brand_name,
  car_image,
  // car_model,
  // car_fuel,
  // car_gear,
  // car_seat,
  isAdmin,
  // available,
}) {
  const navigate = useNavigate();

  const handleRent = (car_id) => {
    if (isAdmin) {
      navigate("/admin/cars/" + car_id + "/update", {
        state: { isAdmin: true },
      });
    } else {
      navigate("/cars/" + car_id, { state: { isAdmin: false } });
    }
  };

  // console.log(available);
  return (
    <div className="mt-2">
      <Card>
        <div className="d-flex justify-content-between align-items-center">
          {" "}
          <div className="d-flex ms-3 mt-2 gap-2">
            <div>
              <Card.Img
                variant="top"
                src={car_brand_image}
                style={{ width: "100%", height: "25px", objectFit: "cover" }}
              />
            </div>
            <div>
              <Card.Title>{car_brand_name}</Card.Title>
            </div>
          </div>
          {/* {isAdmin && (
            <div className="me-3 mt-2">
              {" "}
              <Button
                variant="danger"
                style={{ backgroundColor: "red", color: "white" }}
                onClick={() => console.log("Delete")}
              >
                <i className="bi bi-pencil-fill"></i> Edit
              </Button>
            </div>
          )} */}
        </div>
        <Card.Body>
          <Card.Img
            variant="top"
            src={car_image}
            style={{ width: "350px", height: "200px", objectFit: "cover" }}
          ></Card.Img>
          {/* <div className="d-flex gap-4 mt-3">
            <div>
              <i className="bi bi-car-front-fill"></i> {car_model}
            </div>
            <div>
              <i className="bi bi-fuel-pump-fill"></i> {car_fuel}
            </div>
            <div>
              <i className="bi bi-bezier2"></i> {car_gear}
            </div>
            <div>
              <i className="bi bi-person-exclamation"></i> {car_seat}
            </div>
          </div> */}
          <div className="mt-3">
            {/* {available ? <Button variant="primary" className="w-100" onClick={() => handleRent(car_id)}>
              Rent now
            </Button> : <Button variant="secondary" className="w-100" disabled>
              Rent now]
            </Button>} */}
            <Button
              variant="primary"
              className="w-100"
              onClick={() => handleRent(car_id)}
            >
              View Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CarCard;
