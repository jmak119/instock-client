import React, { useEffect, useState } from "react";
import "./EditWarehouse.scss";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditWarehouse() {
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
      setEmptyField(true);
      return alert("Please do not leave any fields blank");
    }
    if (phoneNumberError || emailError) {
      return alert(`Please enter valid data"`);
    }
    axios
      .put(
        `http://localhost:8080/api/warehouses/${warehouseID}`,
        warehouseDetails
      )
      .catch((error) => {
        alert(error);
      });
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
        />
        <p className="edit-warehouse__title">EditWarehouse</p>
      </div>

      <div>
        <form className="edit-warehouse__form " onSubmit={handleOnSubmit}>
          <div className="edit-warehouse__display">
            <div className="edit-warehouse__details">
              <h3 className="edit-warehouse__details-title">
                Warehouse Details
              </h3>
              <label className="edit-warehouse__label">
                Warehouse Name
                <input
                  type="text"
                  className="edit-warehouse__input"
                  placeholder="Washington"
                  name="warehouse_name"
                  value={warehouseDetails.warehouse_name}
                  onChange={handleOnChange}
                />
              </label>
              <label className="edit-warehouse__label">
                Street Address
                <input
                  type="text"
                  className="edit-warehouse__input"
                  placeholder="300 Pearl Street SW"
                  name="address"
                  value={warehouseDetails.address}
                  onChange={handleOnChange}
                />
              </label>
              <label className="edit-warehouse__label">
                City
                <input
                  type="text"
                  className="edit-warehouse__input"
                  name="city"
                  value={warehouseDetails.city}
                  onChange={handleOnChange}
                />
              </label>
              <label className="edit-warehouse__label">
                Country
                <input
                  type="text"
                  className="edit-warehouse__input"
                  name="country"
                  value={warehouseDetails.country}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="divider divider--vertical"></div>
            <div className="edit-warehouse__details">
              <h3 className="edit-warehouse__details-title">Contact Details</h3>
              <label className="edit-warehouse__label">
                Contact Name
                <input
                  type="text"
                  className="edit-warehouse__input"
                  name="contact_name"
                  value={warehouseDetails.contact_name}
                  onChange={handleOnChange}
                />
              </label>
              <label className="edit-warehouse__label">
                Position
                <input
                  type="text"
                  className="edit-warehouse__input"
                  name="contact_position"
                  value={warehouseDetails.contact_position}
                  onChange={handleOnChange}
                />
              </label>
              <label className="edit-warehouse__label">
                Phone Number
                <input
                  type="tel"
                  className="edit-warehouse__input"
                  name="contact_phone"
                  value={warehouseDetails.contact_phone}
                  onChange={validatePhoneNumber}
                />
                {phoneNumberError && <span>{phoneNumberError}</span>}
              </label>
              <label className="edit-warehouse__label">
                Email
                <input
                  type="email"
                  className="edit-warehouse__input"
                  name="contact_email"
                  value={warehouseDetails.contact_email}
                  onChange={validateEmailAddress}
                />
                {emailError && <span>{emailError}</span>}
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
