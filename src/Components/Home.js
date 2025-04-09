import React from "react";
import Car from "../Images/homecar.jpg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleBrowse = () => {
    navigate(`/cars`);
  };

  return (
    <div
      style={{
        position: "relative", // To stack the background and content correctly
        height: "100vh", // Full viewport height
      }}
    >
      {/* Blurred Background Image */}
      <div
        style={{
          position: "absolute", // Background image is positioned absolutely
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${Car})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(1px)", // Apply blur effect to the background
          zIndex: -1, // Ensure the background stays behind content
        }}
      ></div>

      {/* Content: Align right-center with gap on large screens, center on small screens */}
      <div
        className="d-flex flex-column justify-content-center align-items-center align-items-lg-end"
        style={{
          height: "100%",
          paddingRight: "20px", // Add gap from the right side
        }}
      >
        {/* The text and button */}
        <div className="text-white text-center text-lg-end p-5">
          <h3>Welcome to Our Website</h3>
          <p>Rent the best cars at affordable prices</p>
          <Button variant="danger" onClick={handleBrowse}>
            Browse Cars
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
