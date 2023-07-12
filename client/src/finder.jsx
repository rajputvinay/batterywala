import React from "react";
import "./finder.css";
import { New_Arrival } from "./New-Arrival";
import stateList from "./stateList.json";

export function Finder() {
  return (
    <>
      <div className="battery_finder">
        <div className="bf_header">
          <h1>Find Your Battery Within Seconds</h1>
        </div>
        <div className="search_container">
          <div className="box_container">
            <div className="search_box">
              <h5>Product Type*</h5>
              <select name="product" placeholder="Select Your Colour" />
            </div>
            <div className="search_box">
              <h5>Maker*</h5>
              <select name="maker" placeholder="Select Your Colour" />
            </div>
            <div className="search_box">
              <h5>Model*</h5>
              <select name="model" placeholder="Select Your Colour" />
            </div>
            <div className="search_box">
              <h5>Brand</h5>
              <select name="brand" placeholder="Select Your Colour" />
            </div>
            <div className="search_box">
              <h5>State*</h5>
              <select
                className="selectpicker"
                name="state"
                placeholder="Select State"
              >
                <option value="" defaultValue="">
                  select state
                </option>
                {stateList.map((states) => {
                  return (
                    <option value={states.state_name} key={states.state_id}>
                      {states.state_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="search_box">
              <h5>City*</h5>
              <select name="city" placeholder="Select Your Colour" />
            </div>
          </div>
          <div className="bten">
            <a href="#" className="tg-bten" id="findbattery">
              <span>Find Battery</span>
            </a>
          </div>
        </div>
      </div>
      <New_Arrival />
    </>
  );
}
