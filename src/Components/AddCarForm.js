import React from "react";
import CarForm from "./CarForm";
import axios from "axios";

function AddCarForm() {
  const handleAddSubmit = async (formData) => {
    try {
      const res = await axios.post("http://localhost:8080/api/car", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Added:", res.data);
    } catch (error) {
      console.error("Add Error:", error);
    }
  };

  return <CarForm onSubmit={handleAddSubmit} buttonLabel="Add Car" />;
}

export default AddCarForm;
