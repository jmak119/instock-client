import React from "react";
import "./EditWarehouse.scss";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";

export default function EditWarehouse() {
  return (
    <div div className="edit-warehouse">
      <div className="edit-warehouse__header">
        <img
          src={BackArrow}
          alt="Back Arrow"
          className="edit-warehouse__back-arrow"
        />
        <p className="edit-warehouse__title">EditWarehouse</p>
      </div>
      <div className="edit-warehouse__display">
        <div>
          <form className="edit-warehouse__form edit-warehouse__form--border">
            <div className="edit-warehouse__details edit-warehouse__details--border">
              <p className="edit-warehouse__details-title">Warehouse Details</p>
              <label className="edit-warehouse__label">
                Warehouse Name
                <input
                  type="text"
                  className="edit-warehouse__input"
                  placeholder="Washington"
                />
              </label>
              <label className="edit-warehouse__label">
                Street Address
                <input
                  type="text"
                  className="edit-warehouse__input"
                  placeholder="300 Pearl Street SW"
                />
              </label>
              <label className="edit-warehouse__label">
                City
                <input type="text" className="edit-warehouse__input" />
              </label>
              <label className="edit-warehouse__label">
                Country
                <input type="text" className="edit-warehouse__input" />
              </label>
            </div>
          </form>
        </div>

        <div>
          <form className="edit-warehouse__form ">
            <div className="edit-warehouse__details edit-warehouse__details--border">
              <p className="edit-warehouse__details-title">Contact Details</p>
              <label className="edit-warehouse__label">
                Contact Name
                <input
                  type="text"
                  className="edit-warehouse__input"
                  placeholder="Washington"
                />
              </label>
              <label className="edit-warehouse__label">
                Position
                <input
                  type="text"
                  className="edit-warehouse__input"
                  placeholder="300 Pearl Street SW"
                />
              </label>
              <label className="edit-warehouse__label">
                Phone Number
                <input type="text" className="edit-warehouse__input" />
              </label>
              <label className="edit-warehouse__label">
                Email
                <input type="text" className="edit-warehouse__input" />
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="edit-inventory__footer">
        <button className="edit-warehouse__button edit-warehouse__button--cancel">
          Cancel
        </button>
        <button className="edit-warehouse__button edit-warehouse__button--save">
          Save
        </button>
      </div>
    </div>
  );
}
