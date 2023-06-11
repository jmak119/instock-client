import React, { useEffect, useState } from "react";
import "./EditWarehouse.scss";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ErrorIcon from "../../assets/icons/error-24px.svg";

export default function EditWarehouse() {
  const navigateTo = useNavigate();
  const [emptyNameError, setEmptyNameError] = useState(false);
  const [emptyAddressError, setEmptyAddressError] = useState(false);
  const [emptyCityError, setEmptyCityError] = useState(false);
  const [emptyCountryError, setEmptyCountryError] = useState(false);
  const [emptyContactError, setEmptyContactError] = useState(false);
  const [emptyPhoneError, setEmptyPhoneError] = useState(false);
  const [emptyPositionError, setEmptyPositionError] = useState(false);
  const [emptyEmailError, setEmptyEmailError] = useState(false);
  const [warehouseDetails, setWarehouseDetails] = useState("");
  const params = useParams();
  const warehouseID = params.id || 1;
  const [emptyfield, setEmptyField] = useState(false);

  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/warehouses/${warehouseID}`)
      .then((response) => {
        console.log(response.data);
        setWarehouseDetails(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [warehouseID]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setWarehouseDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setEmptyField(false);
    setEmptyNameError(false);
    setEmptyAddressError(false);
    setEmptyCityError(false);
    setEmptyCountryError(false);
    setEmptyContactError(false);
    setEmptyPhoneError(false);
    setEmptyPositionError(false);
    setEmptyEmailError(false);
    if (
      warehouseDetails.warehouse_name === "" ||
      warehouseDetails.address === "" ||
      warehouseDetails.city === "" ||
      warehouseDetails.country === "" ||
      warehouseDetails.contact_name === "" ||
      warehouseDetails.contact_position === "" ||
      warehouseDetails.contact_phone === "" ||
      warehouseDetails.contact_email === ""
    ) {
      setEmptyField(true);
      alert("Please do not leave any fields blank");
    }
    if (phoneNumberError || emailError) {
      alert(`Please enter valid data"`);
    }
    if (!warehouseDetails.warehouse_name) {
      setEmptyNameError(true);
      // return;
    }
    if (!warehouseDetails.address) {
      setEmptyAddressError(true);
      // return;
    }
    if (!warehouseDetails.city) {
      setEmptyCityError(true);
      // return;
    }
    if (!warehouseDetails.country) {
      setEmptyCountryError(true);
      // return;
    }
    if (!warehouseDetails.contact_name) {
      setEmptyContactError(true);
      // return;
    }
    if (!warehouseDetails.contact_position) {
      setEmptyPositionError(true);
      // return;
    }
    if (!warehouseDetails.contact_phone) {
      setEmptyPhoneError(true);
      // return;
    }
    if (!warehouseDetails.contact_email) {
      setEmptyEmailError(true);
      // return;
    } else {
      axios
        .put(
          `http://localhost:8080/api/warehouses/${warehouseID}`,
          warehouseDetails
        )
        .catch((error) => {
          alert(error);
        });
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
    <div className="edit-warehouse">
      <div className="edit-warehouse__header">
        <img
          src={BackArrow}
          alt="Back Arrow"
          className="edit-warehouse__back-arrow"
          onClick={() => navigateTo(-1)}
        />
        <p className="edit-warehouse__title">Edit Warehouse</p>
      </div>

      <div>
        <form className="edit-warehouse__form " onSubmit={handleOnSubmit}>
          <div className="edit-warehouse__display">
            <div className="edit-warehouse__details edit-warehouse__details--border">
              <h3 className="edit-warehouse__details-title">
                Warehouse Details
              </h3>
              <label className="edit-warehouse__label">
                Warehouse Name
                <input
                  type="text"
                  // placeholder="Washington"
                  name="warehouse_name"
                  value={warehouseDetails.warehouse_name}
                  onChange={handleOnChange}
                  className={`${
                    emptyNameError
                      ? "edit-warehouse__input edit-warehouse__input--error"
                      : "edit-warehouse__input"
                  }`}
                />
                {emptyNameError && (
                  <div className="edit-warehouse__error edit-warehouse__error--name">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="edit-warehouse__error-icon"
                    />
                    <p className="edit-warehouse__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </label>
              <label className="edit-warehouse__label">
                Street Address
                <input
                  type="text"
                  // placeholder="300 Pearl Street SW"
                  name="address"
                  value={warehouseDetails.address}
                  onChange={handleOnChange}
                  className={`${
                    emptyAddressError
                      ? "edit-warehouse__input edit-warehouse__input--error"
                      : "edit-warehouse__input"
                  }`}
                />
                {emptyAddressError && (
                  <div className="edit-warehouse__error edit-warehouse__error--name">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="edit-warehouse__error-icon"
                    />
                    <p className="edit-warehouse__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </label>
              <label className="edit-warehouse__label">
                City
                <input
                  type="text"
                  name="city"
                  value={warehouseDetails.city}
                  onChange={handleOnChange}
                  className={`${
                    emptyCityError
                      ? "edit-warehouse__input edit-warehouse__input--error"
                      : "edit-warehouse__input"
                  }`}
                />
                {emptyCityError && (
                  <div className="edit-warehouse__error edit-warehouse__error--name">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="edit-warehouse__error-icon"
                    />
                    <p className="edit-warehouse__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </label>
              <label className="edit-warehouse__label">
                Country
                <input
                  type="text"
                  name="country"
                  value={warehouseDetails.country}
                  onChange={handleOnChange}
                  className={`${
                    emptyCountryError
                      ? "edit-warehouse__input edit-warehouse__input--error"
                      : "edit-warehouse__input"
                  }`}
                />
                {emptyCountryError && (
                  <div className="edit-warehouse__error edit-warehouse__error--name">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="edit-warehouse__error-icon"
                    />
                    <p className="edit-warehouse__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </label>
            </div>
            <div className="divider divider--vertical"></div>
            <div className="edit-warehouse__details">
              <h3 className="edit-warehouse__details-title">Contact Details</h3>
              <label className="edit-warehouse__label">
                Contact Name
                <input
                  type="text"
                  name="contact_name"
                  value={warehouseDetails.contact_name}
                  onChange={handleOnChange}
                  className={`${
                    emptyContactError
                      ? "edit-warehouse__input edit-warehouse__input--error"
                      : "edit-warehouse__input"
                  }`}
                />
                {emptyContactError && (
                  <div className="edit-warehouse__error edit-warehouse__error--name">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="edit-warehouse__error-icon"
                    />
                    <p className="edit-warehouse__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </label>
              <label className="edit-warehouse__label">
                Position
                <input
                  type="text"
                  name="contact_position"
                  value={warehouseDetails.contact_position}
                  onChange={handleOnChange}
                  className={`${
                    emptyPositionError
                      ? "edit-warehouse__input edit-warehouse__input--error"
                      : "edit-warehouse__input"
                  }`}
                />
                {emptyPositionError && (
                  <div className="edit-warehouse__error edit-warehouse__error--name">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="edit-warehouse__error-icon"
                    />
                    <p className="edit-warehouse__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </label>
              <label className="edit-warehouse__label">
                Phone Number
                <input
                  type="tel"
                  name="contact_phone"
                  value={warehouseDetails.contact_phone}
                  onChange={validatePhoneNumber}
                  className={`${
                    emptyPhoneError
                      ? "edit-warehouse__input edit-warehouse__input--error"
                      : "edit-warehouse__input"
                  }`}
                />
                {emptyPhoneError && (
                  <div className="edit-warehouse__error edit-warehouse__error--name">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="edit-warehouse__error-icon"
                    />
                    <p className="edit-warehouse__error-text">
                      This field is required
                    </p>
                  </div>
                )}
                {phoneNumberError && (
                  <div className="edit-warehouse__error edit-warehouse__error--name">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="edit-warehouse__error-icon"
                    />
                    <p className="edit-warehouse__error-text">
                      Invalid phone number format
                    </p>
                  </div>
                )}
              </label>
              <label className="edit-warehouse__label">
                Email
                <input
                  type="email"
                  name="contact_email"
                  value={warehouseDetails.contact_email}
                  onChange={validateEmailAddress}
                  className={`edit-warehouse__input
                    ${emptyEmailError ? " edit-warehouse__input--error" : ""}
                    
                    ${emailError ? " edit-warehouse__input--error" : ""}
                  
                  `}
                />
                {emptyEmailError && (
                  <div className="edit-warehouse__error edit-warehouse__error--name">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="edit-warehouse__error-icon"
                    />
                    <p className="edit-warehouse__error-text">
                      This field is required
                    </p>
                  </div>
                )}
                {emailError && (
                  <div className="edit-warehouse__error edit-warehouse__error--name">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="edit-warehouse__error-icon"
                    />
                    <p className="edit-warehouse__error-text">
                      Invalid email format
                    </p>
                  </div>
                )}
              </label>
            </div>
          </div>
          <div className="edit-inventory__footer">
            <button className="edit-warehouse__button edit-warehouse__button--cancel">
              Cancel
            </button>
            <button
              type="submit"
              className="edit-warehouse__button edit-warehouse__button--save"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
