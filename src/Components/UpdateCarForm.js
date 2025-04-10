import React from "react";

function UpdateCarForm() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      {/* Full height container and flexbox for centering */}
      <form className="p-4 border shadow rounded">
        <div className="d-flex gap-5">
          <div className="mb-3">
            <label htmlFor="brand" className="form-label">
              <strong>Brand</strong>
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              className="form-control"
              placeholder="Enter brand name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="carName" className="form-label">
              <strong>Brand Image</strong>
            </label>
            <input
              type="file"
              id="carName"
              name="carName"
              className="form-control"
              placeholder="Enter car name"
            />
          </div>
        </div>

        <div className="d-flex gap-5">
          <div className="mb-3">
            <label htmlFor="brand" className="form-label">
              <strong>Model</strong>
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              className="form-control"
              placeholder="Enter Model name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="carimage" className="form-label">
              <strong>Car Image</strong>
            </label>
            <input
              type="file"
              id="carimage"
              name="carimage"
              className="form-control"
              placeholder="Enter car name"
            />
          </div>
        </div>

        {/* Add some margin between Fuel and Gear section */}
        <div className="mb-4"></div> {/* Adding some spacing between the sections */}

        <div className="d-flex gap-5">
          <div className="d-flex flex-column mb-3">
            <label htmlFor="fuelType" className="form-label">
              <strong>Fuel Type</strong>
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="fuelType"
                id="petrol"
                value="petrol"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="petrol">
                Petrol
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="fuelType"
                id="diesel"
                value="diesel"
              />
              <label className="form-check-label" htmlFor="diesel">
                Diesel
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="fuelType"
                id="ev"
                value="ev"
              />
              <label className="form-check-label" htmlFor="ev">
                EV
              </label>
            </div>
          </div>

          <div className="d-flex flex-column mb-3">
            <label htmlFor="gearType" className="form-label">
              <strong>Gear Type</strong>
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gearType"
                id="manual"
                value="manual"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="manual">
                Manual
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gearType"
                id="automatic"
                value="automatic"
              />
              <label className="form-check-label" htmlFor="automatic">
                Automatic
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Update Car
        </button>
      </form>
    </div>
  );
}

export default UpdateCarForm;
