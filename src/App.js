import React from "react";
import Admin from "./Components/Admin";
import { Route, Routes } from "react-router-dom";
import Users from "./Components/Users";
import Home from "./Components/Home";
import RentCar from "./Components/RentCar";
import RentDetails from "./Components/RentDetails";
import UpdateCarForm from "./Components/UpdateCarForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/cars" element={<Users />} />
      <Route path="/cars/:id" element={<RentCar />} />
      <Route path="/admin/cars/:id/update" element={<RentCar />} />
      <Route path="/cars/:id/details" element={<RentDetails />}/>
      <Route path="/form" element={<UpdateCarForm />} />
    </Routes>
  );
}

export default App;
