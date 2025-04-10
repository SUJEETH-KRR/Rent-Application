import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useLocation } from "react-router-dom";

function RentCar() {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const isAdmin = location.state?.isAdmin || false;

  useEffect(() => {
    axios.get(`http://localhost:8080/api/car/${id}`).then((res) => {
      setDetails(res.data);
    });
  }, [id]);

  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());

  const navigate = useNavigate();

  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
    // console.log("Start Date: ", newValue);
  };

  const handleEndDateChange = (newValue) => {
    setEndDate(newValue);
    // console.log("End Date: ", newValue);
  };

  const handlePrice = () => {
    // console.log(typeof(details.rent_price));
    const days = endDate.diff(startDate, "day");
    const totalDays = days > 0 ? days : 1;
    const price = details.rent_price * totalDays;
    return price;
  };

  const handleRentDetails = (id) => {
    navigate("/cars/" + id + "/details");
  };

  const handleUpdateCarDetails = () => {};

  // return (
  //   <div className="container border border-black mt-5 gap-3">
  //     <div className="row border border-green">
  //       <div className="col-12 col-md-6 border border-red">
  //         <div className="d-flex gap-3">
  //           <div>
  //             <img
  //               src={`data:${details.brand_imageType};base64,${details.brand_imageData}`}
  //               alt="Brand"
  //               style={{ width: "100%", height: "60px", objectFit: "cover" }}
  //             />
  //           </div>
  //           <div>
  //             <div>
  //               <h3>{details.brand_name}</h3>
  //             </div>
  //             <div>
  //               <h6>{details.model}</h6>
  //             </div>
  //           </div>
  //         </div>
  //         <div>
  //           <img
  //             src={`data:${details.imageType};base64,${details.imageData}`}
  //             alt="Car"
  //             style={{ width: "100%", height: "350px" }}
  //           />
  //         </div>
  //         <div>
  //           <Button variant="primary" className="w-100 mt-2">
  //             Rs: {details.rent_price}
  //           </Button>
  //         </div>
  //       </div>

  //       <div className="col-12 col-md-6 border border-black d-flex flex-column gap-3">
  //         <div>
  //           <i className="bi bi-fuel-pump-fill"></i> {details.fuel_type}
  //         </div>
  //         <div>
  //           <i className="bi bi-bezier2"></i> {details.gear_shift}
  //         </div>
  //         <div>
  //           <i className="bi bi-person-exclamation"></i> {details.seat}
  //         </div>
  //         <div>
  //           <i className="bi bi-calendar3"></i>{" "}
  //           <LocalizationProvider dateAdapter={AdapterDayjs}>
  //             <DateTimePicker
  //               label="Start Date"
  //               value={startDate}
  //               onAccept={handleStartDateChange}
  //             />
  //           </LocalizationProvider>
  //         </div>
  //         <div>
  //           <i className="bi bi-calendar3-week"></i>
  //           <LocalizationProvider dateAdapter={AdapterDayjs}>
  //             <DateTimePicker
  //               label="End Date"
  //               value={endDate}
  //               onAccept={handleEndDateChange}
  //             />
  //           </LocalizationProvider>
  //         </div>
  //         <div>Price: Rs. {handlePrice()}</div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="d-flex mt-3 justify-content-center align-items-center">
      <div className="d-flex flex-column">
        {/* Top section with Brand Image, Model, Brand Name, and Price */}
        <div className="d-flex justify-content-between align-items-start">
          {/* Left side (Brand Image, Brand Name, Model) */}
          <div className="d-flex gap-2">
            <div>
              <img
                src={`data:${details.brand_imageType};base64,${details.brand_imageData}`}
                alt="Brand"
                style={{ width: "100%", height: "60px", objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 className="text-danger">{details.brand_name}</h3>
              <h6>{details.model}</h6>
            </div>
          </div>
          {/* Right side (Price) */}
          <div className="d-flex align-items-end justify-content-end flex-column gap-2 text-end">
            <div>
              <h6 className="p-1 bg-info text-white rounded" disabled>
                ₹ {details.rent_price} / day
              </h6>
            </div>
            <div>
              {details.available ? (
                <h6 className="p-1 bg-success text-white rounded" disabled>
                  Available
                </h6>
              ) : (
                <h6 className="p-1 bg-secondary text-white rounded " disabled>
                  Not Available
                </h6>
              )}
            </div>
          </div>
        </div>

        {/* Car Image */}
        <div className="mt-2">
          <img
            src={`data:${details.imageType};base64,${details.imageData}`}
            alt="Car"
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
          />
        </div>

        <div>
          <div className="d-flex gap-3 mt-2 justify-content-between">
            <div>
              <i className="bi bi-fuel-pump-fill"></i> {details.fuel_type}
            </div>
            <div>
              <i className="bi bi-bezier2"></i> {details.gear_shift}
            </div>
            <div>
              <i className="bi bi-person-exclamation"></i> {details.seat}
            </div>
            <div>
              <h6 className="p-1 bg-warning rounded">₹ {handlePrice()}</h6>
            </div>
          </div>
        </div>
        <div className="d-flex mt-2 justify-content-between">
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Start Date"
                value={startDate}
                onAccept={handleStartDateChange}
              />
            </LocalizationProvider>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <h5>to</h5>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="End Date"
                value={endDate}
                onAccept={handleEndDateChange}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="mt-2 mb-2">
          {isAdmin ? (
            <Button variant="danger" className="w-100" onClick={handleUpdateCarDetails}>
              Update Details
            </Button>
          ) : details.available ? (
            <Button
              variant="primary" 
              className="w-100"
              onClick={() => handleRentDetails(details.id)}
            >
              Rent now
            </Button>
          ) : (
            <Button variant="secondary" className="w-100" disabled>
              Rent now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RentCar;
