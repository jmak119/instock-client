import React, { useEffect, useState } from "react";
import "./EditWarehouse.scss";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditWarehouse() {
  const [loading, setLoading] = useState(true);
  const [warehouseDetails, setWarehouseDetails] = useState(null);
  const params = useParams();
  const warehouseID = params.id || 1;
  const [emptyfield, setEmptyField] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/warehouses/${warehouseID}`)
      .then((response) => {
        setWarehouseDetails(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [warehouseID]);

  function handlePhoneNumberChange(event) {
    const value = event.target.value;
    setPhoneNumber(value);

    if (!/^\d{10}$/.test(value)) {
      setPhoneNumberError("Please enter a valid phone number");
    } else {
      setPhoneNumberError("");
    }
  }

  function handleEmailChange(event) {
    const value = event.target.value;
    setEmail(value);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }

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
            <div className="edit-warehouse__details edit-warehouse__details--border">
              <p className="edit-warehouse__details-title">Warehouse Details</p>
              <label className="edit-warehouse__label">
                Warehouse Name
                <input
                  type="text"
                  className="edit-warehouse__input"
                  placeholder="Washington"
                  defaultValue={warehouseDetails?.warehouse_name}
                />
              </label>
              <label className="edit-warehouse__label">
                Street Address
                <input
                  type="text"
                  className="edit-warehouse__input"
                  placeholder="300 Pearl Street SW"
                  defaultValue={warehouseDetails?.address}
                />
              </label>
              <label className="edit-warehouse__label">
                City
                <input
                  type="text"
                  className="edit-warehouse__input"
                  defaultValue={warehouseDetails?.city}
                />
              </label>
              <label className="edit-warehouse__label">
                Country
                <input
                  type="text"
                  className="edit-warehouse__input"
                  defaultValue={warehouseDetails?.country}
                />
              </label>
            </div>

            <div>
              <div className="edit-warehouse__form">
                <div className="edit-warehouse__details">
                  <p className="edit-warehouse__details-title">
                    Contact Details
                  </p>
                  <label className="edit-warehouse__label">
                    Contact Name
                    <input
                      type="text"
                      className="edit-warehouse__input"
                      defaultValue={warehouseDetails?.contact_name}
                    />
                  </label>
                  <label className="edit-warehouse__label">
                    Position
                    <input
                      type="text"
                      className="edit-warehouse__input"
                      defaultValue={warehouseDetails?.contact_position}
                    />
                  </label>
                  <label className="edit-warehouse__label">
                    Phone Number
                    <input
                      type="tel"
                      defaultValue={warehouseDetails?.contact_phone}
                      onChange={handlePhoneNumberChange}
                      className="edit-warehouse__input"
                    />
                    {phoneNumberError && <span>{phoneNumberError}</span>}
                  </label>
                  <label className="edit-warehouse__label">
                    Email
                    <input
                      type="email"
                      defaultValue={warehouseDetails?.contact_email}
                      onChange={handleEmailChange}
                      className="edit-warehouse__input"
                    />
                    {emailError && <span>{emailError}</span>}
                  </label>
                </div>
              </div>
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
