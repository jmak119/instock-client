import React, { useState, useEffect } from "react";
import "./AddInventory.scss";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import axios from "axios";

export default function AddInventory() {
  const [loading, setLoading] = useState(true);
  const [inventoryItemDetails, setInventoryItemDetails] = useState({
    status: "In Stock",
    quantity: 0,
  });
  const [warehouseList, setWarehouseList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [emptyDescriptionError, setEmptyDescriptionError] = useState(false);
  const [emptyNameError, setEmptyNameError] = useState(false);
  const [noCategoryError, setNoCategoryError] = useState(false);
  const [noWarehouseError, setNoWarehouseError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/inventories`)
      .then((response) => {
        let categoryArray = [];
        response.data.forEach((item) => {
          if (!categoryArray.includes(item.category)) {
            categoryArray.push(item.category);
          }
        });
        setCategoryList(categoryArray);
      })
      .catch((error) => {
        alert(error);
      });

    axios.get(`http://localhost:8080/api/warehouses`).then((response) => {
      setWarehouseList(
        response.data.map((warehouse) => ({
          id: warehouse.id,
          warehouse_name: warehouse.warehouse_name,
        }))
      );
      setLoading(false);
    });
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "status" && value === "Out of Stock") {
      setInventoryItemDetails((prevDetails) => ({
        ...prevDetails,
        status: value,
        quantity: 0,
      }));
    } else {
      setInventoryItemDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setEmptyNameError(false);
    setEmptyDescriptionError(false);
    setNoCategoryError(false);
    setNoWarehouseError(false);
    if (
      !inventoryItemDetails.item_name ||
      !inventoryItemDetails.description ||
      !inventoryItemDetails.category ||
      !inventoryItemDetails.warehouse
    ) {
      if (!inventoryItemDetails.item_name) {
        setEmptyNameError(true);
      }
      if (!inventoryItemDetails.description) {
        setEmptyDescriptionError(true);
      }
      if (!inventoryItemDetails.category) {
        setNoCategoryError(true);
      }
      if (!inventoryItemDetails.warehouse) {
        setNoWarehouseError(true);
      }
      if (
        inventoryItemDetails.quantity === 0 &&
        inventoryItemDetails.status === "In Stock"
      ) {
        setQuantityError(true);
      }

      if (isNaN(Number(inventoryItemDetails.quantity))) {
        setQuantityError(true);
      }
      return;
    }

    if (
      inventoryItemDetails.quantity === 0 &&
      inventoryItemDetails.status === "In Stock"
    ) {
      setQuantityError(true);
    }

    if (typeof inventoryItemDetails.quantity !== "number") {
      setQuantityError(true);
    }

    axios
      .post(`http://localhost:8080/api/inventories/`, inventoryItemDetails)
      .catch((error) => {
        alert(error);
      });
  };

  if (loading) {
    return <>Loading...</>;
  }

  const inStock = inventoryItemDetails.status === "In Stock";

  return (
    <div className="add-inventory">
      <div className="add-inventory__header">
        <img
          src={BackArrow}
          alt="Back Arrow"
          className="add-inventory__back-arrow"
        />
        <p className="add-inventory__title">Add New Inventory Item</p>
      </div>
      <form className="add-inventory__form" onSubmit={handleOnSubmit}>
        <div className="add-inventory__form-inputs">
          <div className="add-inventory__details add-inventory__details--border">
            <p className="add-inventory__details-title">Item Details</p>
            <label className="add-inventory__label">
              Item Name
              <div className="add-inventory__container">
                <input
                  type="text"
                  name="item_name"
                  className={`${
                    emptyNameError
                      ? "add-inventory__input add-inventory__input--error"
                      : "add-inventory__input"
                  }`}
                  onChange={handleOnChange}
                  placeholder="Item Name"
                />
                {emptyNameError && (
                  <div className="add-inventory__error add-inventory__error--name">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="add-inventory__error-icon"
                    />
                    <p className="add-inventory__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </label>

            <label className="add-inventory__label">
              Description
              <div className="add-inventory__container">
                <textarea
                  name="description"
                  onChange={handleOnChange}
                  placeholder="Please enter a brief item description..."
                  className={`${
                    emptyDescriptionError
                      ? "add-inventory__input add-inventory__input--description add-inventory__input--error"
                      : "add-inventory__input add-inventory__input--description"
                  }`}
                />
                {emptyDescriptionError && (
                  <div className="add-inventory__error add-inventory__error--description">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="add-inventory__error-icon"
                    />
                    <p className="add-inventory__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </label>
            <label className="add-inventory__label">
              Category
              <div className="add-inventory__container">
                <select
                  type="text"
                  name="category"
                  onChange={handleOnChange}
                  className={`add-inventory__input 
                  ${noCategoryError ? "add-inventory__input--error" : ""}
                  ${
                    !inventoryItemDetails.category
                      ? "add-inventory__input--placeholder"
                      : ""
                  }`}
                >
                  <option value="">Please select</option>
                  {categoryList.map((category) => {
                    return <option value={category}>{category}</option>;
                  })}
                </select>
                {noCategoryError && (
                  <div className="add-inventory__error add-inventory__error--description">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="add-inventory__error-icon"
                    />
                    <p className="add-inventory__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </label>
          </div>
          <div className="add-inventory__details">
            <p className="add-inventory__details-title">Item Availability</p>
            <label className="add-inventory__label">
              Status
              <div className="add-inventory__radio-container">
                <div className="add-inventory__radio-block">
                  <input
                    type="radio"
                    name="status"
                    value="In Stock"
                    className="add-inventory__radio"
                    checked={inventoryItemDetails.status === "In Stock"}
                    onChange={handleOnChange}
                  />
                  <label className="add-inventory__instock-label">
                    In stock
                  </label>
                </div>
                <div className="add-inventory__radio-block">
                  <input
                    type="radio"
                    name="status"
                    value="Out of Stock"
                    className="add-inventory__radio"
                    checked={inventoryItemDetails.status === "Out of Stock"}
                    onChange={handleOnChange}
                  />
                  <label>Out of stock</label>
                </div>
              </div>
            </label>
            {inStock && (
              <label className="add-inventory__label">
                Quantity
                <div className="add-inventory__container">
                  <input
                    type="text"
                    name="quantity"
                    value={inventoryItemDetails.quantity}
                    onChange={handleOnChange}
                    className={`${
                      quantityError
                        ? "add-inventory__input add-inventory__input--quantity add-inventory__input--error"
                        : "add-inventory__input add-inventory__input--quantity"
                    }`}
                  />
                  {quantityError && (
                    <div className="add-inventory__error">
                      <img
                        src={ErrorIcon}
                        alt="Error Icon"
                        className="add-inventory__error-icon"
                      />
                      <p className="add-inventory__error-text">
                        Quantity must be a number greater than 0
                      </p>
                    </div>
                  )}
                </div>
              </label>
            )}
            <label className="add-inventory__label">
              Warehouse
              <div className="add-inventory__container">
                <select
                  type="text"
                  name="warehouse"
                  onChange={handleOnChange}
                  className={`add-inventory__input 
                ${noWarehouseError ? "add-inventory__input--error" : ""}
                ${
                  !inventoryItemDetails.warehouse
                    ? "add-inventory__input--placeholder"
                    : ""
                }`}
                >
                  <option value="" className="change">
                    Please select
                  </option>
                  {warehouseList.map((warehouse) => {
                    return (
                      <option value={warehouse.id}>
                        {warehouse.warehouse_name}
                      </option>
                    );
                  })}
                </select>
                {noWarehouseError && (
                  <div className="add-inventory__error">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="add-inventory__error-icon"
                    />
                    <p className="add-inventory__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>
        <div className="add-inventory__footer">
          <button className="add-inventory__button add-inventory__button--cancel">
            Cancel
          </button>
          <button
            type="submit"
            className="add-inventory__button add-inventory__button--add"
          >
            + Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
