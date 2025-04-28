import React from "react";
import Car from "../Images/login.jpg";

function AdminLogin() {
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
          <form>
            <div className="form-group mb-3">
              <input
                type="text"
                placeholder="Username"
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
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
