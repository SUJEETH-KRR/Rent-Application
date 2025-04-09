import React from "react";
import Admin from "./Components/Admin";
import { Route, Routes } from "react-router-dom";
import Cars from "./Components/Cars";
import Home from "./Components/Home";
import RentCar from "./Components/RentCar";
import RentDetails from "./Components/RentDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/:id" element={<RentCar />} />
      <Route path="/cars/:id/details" element={<RentDetails />}/>
    </Routes>
  );
}

export default App;
