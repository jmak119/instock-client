import React, { useState } from "react";
import "./AddWarehouse.scss";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorIcon from "../../assets/icons/error-24px.svg";

export default function AddWarehouse() {
  const navigateTo = useNavigate();
  const [emptyNameError, setEmptyNameError] = useState(false);
  const [emptyAddressError, setEmptyAddressError] = useState(false);
  const [emptyCityError, setEmptyCityError] = useState(false);
  const [emptyCountryError, setEmptyCountryError] = useState(false);
  const [emptyContactError, setEmptyContactError] = useState(false);
  const [emptyPhoneError, setEmptyPhoneError] = useState(false);
  const [emptyPositionError, setEmptyPositionError] = useState(false);
  const [emptyEmailError, setEmptyEmailError] = useState(false);
  const [warehouseDetails, setWarehouseDetails] = useState({});

  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setWarehouseDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setEmptyNameError(false);
    setEmptyAddressError(false);
    setEmptyCityError(false);
    setEmptyCountryError(false);
    setEmptyContactError(false);
    setEmptyPhoneError(false);
    setEmptyPositionError(false);
    setEmptyEmailError(false);
    if (
      !warehouseDetails.warehouse_name ||
      !warehouseDetails.address ||
      !warehouseDetails.city ||
      !warehouseDetails.country ||
      !warehouseDetails.contact_name ||
      !warehouseDetails.contact_position ||
      !warehouseDetails.contact_phone ||
      !warehouseDetails.contact_email
    ) {
      return alert("Please do not leave any fields blank");
    }
    if (phoneNumberError || emailError) {
      return alert(`Please enter valid data"`);
    }
    axios
      .post(`http://localhost:8080/api/warehouses`, warehouseDetails)
      .catch((error) => {
        alert(error);
      });

    if (!warehouseDetails.warehouse_name) {
      setEmptyNameError(true);
    }
    if (!warehouseDetails.address) {
      setEmptyAddressError(true);
    }
    if (!warehouseDetails.city) {
      setEmptyCityError(true);
    }
    if (!warehouseDetails.country) {
      setEmptyCountryError(true);
    }
    if (!warehouseDetails.contact_name) {
      setEmptyContactError(true);
    }
    if (!warehouseDetails.contact_position) {
      setEmptyPositionError(true);
    }
    if (!warehouseDetails.contact_phone) {
      setEmptyPhoneError(true);
    }
    if (!warehouseDetails.contact_email) {
      setEmptyEmailError(true);
    }
  };

  if (!warehouseDetails) {
    return null;
  }
  function handlePhoneNumberChange(event) {
    const value = event.target.value;

    if (!/^\d{10}$/.test(value)) {
      setPhoneNumberError("Please enter a valid phone number");
    } else {
      setPhoneNumberError("");
    }
  }

  function handleEmailChange(event) {
    const value = event.target.value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }
  function validateEmailAddress(event) {
    handleOnChange(event);
    handleEmailChange(event);
  }
  function validatePhoneNumber(event) {
    handleOnChange(event);
    handlePhoneNumberChange(event);
  }

  return (
    <div className="add-warehouse">
      <div className="add-warehouse__header">
        <img
          src={BackArrow}
          alt="Back Arrow"
          className="add-warehouse__back-arrow"
          onClick={() => navigateTo(-1)}
        />
        <p className="add-warehouse__title">Add Warehouse</p>
      </div>

      <div>
        <form className="add-warehouse__form " onSubmit={handleOnSubmit}>
          <div className="add-warehouse__display">
            <div className="add-warehouse__details add-warehouse__details--border">
              <h3 className="add-warehouse__details-title">
                Warehouse Details
              </h3>
              <label className="add-warehouse__label">
                Warehouse Name
                <div className="add-warehouse__container">
                  <input
                    type="text"
                    placeholder="Warehouse Name"
                    name="warehouse_name"
                    value={warehouseDetails.warehouse_name}
                    onChange={handleOnChange}
                    className={`${
                      emptyNameError
                        ? "add-warehouse__input add-warehouse__input--error"
                        : "add-warehouse__input"
                    }`}
                  />
                  {emptyNameError && (
                    <div className="add-warehouse__error add-warehouse__error--name">
                      <img
                        src={ErrorIcon}
                        alt="Error Icon"
                        className="add-warehouse__error-icon"
                      />
                      <p className="add-warehouse__error-text">
                        This field is required
                      </p>
                    </div>
                  )}
                </div>
              </label>
              <label className="add-warehouse__label">
                Street Address
                <div className="add-warehouse__container">
                  <input
                    type="text"
                    className={`${
                      emptyAddressError
                        ? "add-warehouse__input add-warehouse__input--error"
                        : "add-warehouse__input"
                    }`}
                    placeholder="Street Address"
                    name="address"
                    value={warehouseDetails.address}
                    onChange={handleOnChange}
                  />
                  {emptyAddressError && (
                    <div className="add-warehouse__error add-warehouse__error--name">
                      <img
                        src={ErrorIcon}
                        alt="Error Icon"
                        className="add-warehouse__error-icon"
                      />
                      <p className="add-warehouse__error-text">
                        This field is required
                      </p>
                    </div>
                  )}
                </div>
              </label>
              <label className="add-warehouse__label">
                City
                <div className="add-warehouse__container">
                  <input
                    type="text"
                    placeholder="City"
                    className={`${
                      emptyCityError
                        ? "add-warehouse__input add-warehouse__input--error"
                        : "add-warehouse__input"
                    }`}
                    name="city"
                    value={warehouseDetails.city}
                    onChange={handleOnChange}
                  />
                  {emptyCityError && (
                    <div className="add-warehouse__error add-warehouse__error--name">
                      <img
                        src={ErrorIcon}
                        alt="Error Icon"
                        className="add-warehouse__error-icon"
                      />
                      <p className="add-warehouse__error-text">
                        This field is required
                      </p>
                    </div>
                  )}
                </div>
              </label>
              <label className="add-warehouse__label">
                Country
                <div className="add-warehouse__container">
                  <input
                    type="text"
                    placeholder="Country"
                    className={`${
                      emptyCountryError
                        ? "add-warehouse__input add-warehouse__input--error"
                        : "add-warehouse__input"
                    }`}
                    name="country"
                    value={warehouseDetails.country}
                    onChange={handleOnChange}
                  />
                  {emptyCountryError && (
                    <div className="add-warehouse__error add-warehouse__error--name">
                      <img
                        src={ErrorIcon}
                        alt="Error Icon"
                        className="add-warehouse__error-icon"
                      />
                      <p className="add-warehouse__error-text">
                        This field is required
                      </p>
                    </div>
                  )}
                </div>
                .
              </label>
            </div>
            <div className="divider divider--vertical"></div>
            <div className="add-warehouse__details add-warehouse__details--border">
              <h3 className="add-warehouse__details-title">Contact Details</h3>
              <label className="add-warehouse__label">
                Contact Name
                <div className="add-warehouse__container">
                  <input
                    type="text"
                    placeholder="Contact Name"
                    className={`${
                      emptyContactError
                        ? "add-warehouse__input add-warehouse__input--error"
                        : "add-warehouse__input"
                    }`}
                    name="contact_name"
                    value={warehouseDetails.contact_name}
                    onChange={handleOnChange}
                  />
                  {emptyContactError && (
                    <div className="add-warehouse__error add-warehouse__error--name">
                      <img
                        src={ErrorIcon}
                        alt="Error Icon"
                        className="add-warehouse__error-icon"
                      />
                      <p className="add-warehouse__error-text">
                        This field is required
                      </p>
                    </div>
                  )}
                </div>
              </label>
              <label className="add-warehouse__label">
                Position
                <div className="add-warehouse__container">
                  <input
                    type="text"
                    placeholder="Position"
                    className={`${
                      emptyPositionError
                        ? "add-warehouse__input add-warehouse__input--error"
                        : "add-warehouse__input"
                    }`}
                    name="contact_position"
                    value={warehouseDetails.contact_position}
                    onChange={handleOnChange}
                  />
                  {emptyPositionError && (
                    <div className="add-warehouse__error add-warehouse__error--name">
                      <img
                        src={ErrorIcon}
                        alt="Error Icon"
                        className="add-warehouse__error-icon"
                      />
                      <p className="add-warehouse__error-text">
                        This field is required
                      </p>
                    </div>
                  )}
                </div>
              </label>
              <label className="add-warehouse__label">
                Phone Number
                <div className="add-warehouse__container">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className={`${
                      emptyPhoneError
                        ? "add-warehouse__input add-warehouse__input--error"
                        : "add-warehouse__input"
                    }`}
                    name="contact_phone"
                    value={warehouseDetails.contact_phone}
                    onChange={validatePhoneNumber}
                  />
                  {emptyPhoneError && (
                    <div className="add-warehouse__error add-warehouse__error--name">
                      <img
                        src={ErrorIcon}
                        alt="Error Icon"
                        className="add-warehouse__error-icon"
                      />
                      <p className="add-warehouse__error-text">
                        This field is required
                      </p>
                    </div>
                  )}
                  {phoneNumberError && <span>{phoneNumberError}</span>}
                </div>
              </label>
              <label className="add-warehouse__label">
                Email
                <div className="add-warehouse__container">
                  <input
                    type="email"
                    placeholder="Email"
                    className={`${
                      emptyEmailError
                        ? "add-warehouse__input add-warehouse__input--error"
                        : "add-warehouse__input"
                    }`}
                    name="contact_email"
                    value={warehouseDetails.contact_email}
                    onChange={validateEmailAddress}
                  />
                  {emptyEmailError && (
                    <div className="add-warehouse__error add-warehouse__error--name">
                      <img
                        src={ErrorIcon}
                        alt="Error Icon"
                        className="add-warehouse__error-icon"
                      />
                      <p className="add-warehouse__error-text">
                        This field is required
                      </p>
                    </div>
                  )}
                  {emailError && <span>{emailError}</span>}
                </div>
              </label>
            </div>
          </div>
          <div className="edit-inventory__footer">
            <button className="add-warehouse__button add-warehouse__button--cancel">
              Cancel
            </button>
            <button
              type="submit"
              className="add-warehouse__button add-warehouse__button--Add"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
