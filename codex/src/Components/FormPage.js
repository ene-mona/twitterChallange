import { useState } from "react";
import DragAndDrop from "./DragAndDrop";
import Controller from "./Controller";
import PropertyList from "./PropertyList";

const FormPage = (props) => {
  const { handleAmount, handleCity, handleRoom, handleState, handleSubmit } =
    props;
  console.log("Abel");

  return (
    <div className="container formPage" id="formPage">
      <h3>
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h3>
      <form className="form pb-5" id="form" onSubmit={handleSubmit}>
        <h5 className="form-header">Add A New Property</h5>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                City <span className="text-danger">*</span>
              </label>
              <select
                className="form-select shadow-none"
                aria-label="Default select example"
                onChange={handleCity}
                required
              >
                <option selected>Select City</option>
                <option value="Up-town">Up-town</option>
                <option value="Da-hood">Da-hood</option>
                <option value="Down-town">Down-town</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Price <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control shadow-none"
                id="exampleInputPassword1"
                placeholder="Enter Price"
                required
                onChange={handleAmount}
              />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Address"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                State <span className="text-danger">*</span>
              </label>
              <select
                className="form-select shadow-none"
                aria-label="Default select example"
                onChange={handleState}
                required
              >
                <option selected>Select State</option>
                <option value="san francisco">san francisco</option>
                <option value="Oklahama">Oklahama</option>
                <option value="Abuja">Abuja</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Room Type <span className="text-danger">*</span>
              </label>
              <select
                className="form-select shadow-none"
                aria-label="Default select example"
                onChange={handleRoom}
                required
              >
                <option selected>Select Room Type</option>
                <option value="Private Room">Private Room </option>
                <option value="Exclusive Room">Exclusive Room</option>
                <option value="Public Room">Public Room</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Unit Number <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                class="form-control shadow-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Unit"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Room Type <span className="text-danger">*</span>
              </label>
              <select
                className="form-select  shadow-none"
                aria-label="Default select example"
                placeholder="Select Room Type"
              >
                <option selected className="selected">
                  Select Room Type
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-3 Description">
          <label for="exampleInputEmail1" className="form-label">
            Description <span className="text-danger">*</span>
          </label>
          <div className="form-floating">
            <textarea
              className="form-control shadow-none desc"
              placeholder="Enter Description"
              id="floatingTextarea2"
              // style="height: 100px"
            ></textarea>
            <label for="floatingTextarea2" className="selected">
              Enter Description
            </label>
          </div>
        </div>
        <div className="photo-upload">
          <div className="mb-5">
            <DragAndDrop />
          </div>
        </div>
        <div className="btn-wrapper">
          <button
            type="submit"
            className="btn shadow-none"
            // onClick={handleSubmit}
          >
            Add New Property
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormPage;
