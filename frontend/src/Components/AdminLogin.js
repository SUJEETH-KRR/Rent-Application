import React, { useEffect, useState } from "react";
import Car from "../Images/login.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    if (isLoggedIn) 
      navigate("/admin"); // 👈 Redirect to admin dashboard
    
  }, [navigate]);

  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const [validCreds, setValidCreds] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(creds);
    try {
      const response = await axios.post(
        `http://localhost:8080/api/login`,
        creds
      );
      if (response.status === 200) {
        const { username } = response.data;
        localStorage.setItem("isAdminLoggedIn", "true");
        localStorage.setItem("adminUsername", username);
        navigate("/admin");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) setValidCreds(true);
      else console.log(error);
    }
  };

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${Car})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
          zIndex: -1,
        }}
      ></div>

      {/* Login Form Container */}
      <div
        className="d-flex justify-content-center align-items-center shadow"
        style={{ height: "100vh" }}
      >
        <div
          className="p-5 rounded shadow"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            minWidth: "300px",
          }}
        >
          <h3 className="text-center mb-4">Admin Login</h3>
          {validCreds && (
            <div className="alert alert-danger" role="alert">
              Invalid Credentails
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
