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

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/warehouses/${warehouseID}`)
      .then((response) => {
        console.log(response.data);
        setWarehouseDetails({
          // warehouse_name: response.data.warehouse_name,
          // address: response.data.address,
          // city: response.data.city,
          // country: response.data.country,
          // contact_name: response.data.contact_name,
          // contact_position: response.data.contact_position,
          // contact_phone: response.data.contact_phone,
          // contact_email: response.data.contact_email,
        });
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

  const handleOnChange = (event) => {
    const {
      name,
      value,
      // warehouse_name,
      // address,
      // city,
      // country,
      // contact_name,
      // contact_position,
      // contact_phone,
      // contact_email,
    } = event.target;
    setWarehouseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
      // [warehouse_name]: value,
      // [address]: value,
      // [city]: value,
      // [country]: value,
      // [contact_name]: value,
      // [contact_position]: value,
      // [contact_phone]: value,
      // [contact_email]: value,
    }));
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

  function testEmailFunction() {
    handleEmailChange();
    handleOnChange();
  }
  function testPhoneFunction() {
    handlePhoneNumberChange();
    handleOnChange();
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
                  onChange={handleOnChange}
                  className="edit-warehouse__input"
                  placeholder="Washington"
                  Value={warehouseDetails.warehouse_name}
                />
              </label>
              <label className="edit-warehouse__label">
                Street Address
                <input
                  type="text"
                  onChange={handleOnChange}
                  className="edit-warehouse__input"
                  placeholder="300 Pearl Street SW"
                  Value={warehouseDetails.address}
                />
              </label>
              <label className="edit-warehouse__label">
                City
                <input
                  type="text"
                  onChange={handleOnChange}
                  className="edit-warehouse__input"
                  Value={warehouseDetails.city}
                />
              </label>
              <label className="edit-warehouse__label">
                Country
                <input
                  onChange={handleOnChange}
                  type="text"
                  className="edit-warehouse__input"
                  Value={warehouseDetails.country}
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
                  onChange={handleOnChange}
                  className="edit-warehouse__input"
                  Value={warehouseDetails.contact_name}
                />
              </label>
              <label className="edit-warehouse__label">
                Position
                <input
                  onChange={handleOnChange}
                  type="text"
                  className="edit-warehouse__input"
                  Value={warehouseDetails.contact_position}
                />
              </label>
              <label className="edit-warehouse__label">
                Phone Number
                <input
                  type="tel"
                  Value={warehouseDetails.contact_phone}
                  onChange={testPhoneFunction}
                  className="edit-warehouse__input"
                />
                {phoneNumberError && <span>{phoneNumberError}</span>}
              </label>
              <label className="edit-warehouse__label">
                Email
                <input
                  type="email"
                  Value={warehouseDetails.contact_email}
                  onChange={testEmailFunction}
                  className="edit-warehouse__input"
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
