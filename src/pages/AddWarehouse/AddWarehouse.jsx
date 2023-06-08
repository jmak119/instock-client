import React from "react";
import "./AddWarehouse.scss";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";

export default function AddWarehouse() {
  return (
    <div div className="add-warehouse">
      <div className="add-warehouse__header">
        <img
          src={BackArrow}
          alt="Back Arrow"
          className="add-warehouse__back-arrow"
        />
        <p className="add-warehouse__title">Add New Warehouse</p>
      </div>
      <div className="add-warehouse__display">
        <div>
          <form className="add-warehouse__form add-warehouse__form--border">
            <div className="add-warehouse__details add-warehouse__details--border">
              <p className="add-warehouse__details-title">Warehouse Details</p>
              <label className="add-warehouse__label">
                Warehouse Name
                <input
                  type="text"
                  className="add-warehouse__input"
                  placeholder="Washington"
                />
              </label>
              <label className="add-warehouse__label">
                Street Address
                <input
                  type="text"
                  className="add-warehouse__input"
                  placeholder="300 Pearl Street SW"
                />
              </label>
              <label className="add-warehouse__label">
                City
                <input type="text" className="add-warehouse__input" />
              </label>
              <label className="add-warehouse__label">
                Country
                <input type="text" className="add-warehouse__input" />
              </label>
            </div>
          </form>
        </div>

        <div>
          <form className="add-warehouse__form ">
            <div className="add-warehouse__details add-warehouse__details--border">
              <p className="add-warehouse__details-title">Contact Details</p>
              <label className="add-warehouse__label">
                Contact Name
                <input
                  type="text"
                  className="add-warehouse__input"
                  placeholder="Washington"
                />
              </label>
              <label className="add-warehouse__label">
                Position
                <input
                  type="text"
                  className="add-warehouse__input"
                  placeholder="300 Pearl Street SW"
                />
              </label>
              <label className="add-warehouse__label">
                Phone Number
                <input type="text" className="add-warehouse__input" />
              </label>
              <label className="add-warehouse__label">
                Email
                <input type="text" className="add-warehouse__input" />
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="add-warehouse__footer">
        <button className="add-warehouse__button add-warehouse__button--cancel">
          Cancel
        </button>
        <button
          type="submit"
          className="add-warehouse__button add-warehouse__button--Add"
        >
          + Add Warehouse
        </button>
      </div>
    </div>
  );
}
