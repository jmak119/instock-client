import React, { useState, useEffect } from "react";
import "./EditInventory.scss";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

export default function EditInventory() {
  const [inventoryItemDetails, setInventoryItemDetails] = useState(null);
  const [warehouseList, setWarehouseList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const params = useParams();
  const inventoryItemID = params.id || 1;
  const [emptyDescriptionError, setEmptyDescriptionError] = useState(false);
  const [emptyNameError, setEmptyNameError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [inStock, setInStock] = useState(null);
  const [currentWarehouse, setCurrentWarehouse] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventories/${inventoryItemID}`)
      .then((response) => {
        setInventoryItemDetails({
          warehouse_id: response.data.warehouse_id,
          item_name: response.data.item_name,
          description: response.data.description,
          category: response.data.category,
          status: response.data.status,
          quantity: response.data.quantity,
        });
      })
      .catch((error) => {
        console.log(error);
      });

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
        console.log(error);
      });

    axios.get(`http://localhost:8080/api/warehouses`).then((response) => {
      setWarehouseList(
        response.data.map((warehouse) => ({
          id: warehouse.id,
          warehouse_name: warehouse.warehouse_name,
        }))
      );
    });
  }, [inventoryItemID]);

  useEffect(() => {
    if (inventoryItemDetails && warehouseList.length > 0) {
      setCurrentWarehouse(
        warehouseList.find(
          (warehouse) => warehouse.id === inventoryItemDetails.warehouse_id
        ) || {}
      );
    }
  }, [inventoryItemDetails, warehouseList]);

  useEffect(() => {
    if (inventoryItemDetails) {
      setInStock(inventoryItemDetails.status === "In Stock");
    }
  }, [inventoryItemDetails]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "warehouse_id") {
      const selectedWarehouse = warehouseList.find(
        (warehouse) => warehouse.id === Number(value)
      );
      setCurrentWarehouse(selectedWarehouse);
    }
    if (name === "status" && value === "Out of Stock") {
      setInventoryItemDetails((prevDetails) => ({
        ...prevDetails,
        quantity: "0",
      }));
    }
    setInventoryItemDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setEmptyNameError(false);
    setEmptyDescriptionError(false);

    if (!inventoryItemDetails.item_name || !inventoryItemDetails.description) {
      if (!inventoryItemDetails.item_name) {
        setEmptyNameError(true);
      }
      if (!inventoryItemDetails.description) {
        setEmptyDescriptionError(true);
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
      isNaN(Number(inventoryItemDetails.quantity)) ||
      !inventoryItemDetails.quantity ||
      (inventoryItemDetails.quantity === "0" &&
        inventoryItemDetails.status === "In Stock")
    ) {
      setQuantityError(true);
      return;
    }

    axios
      .put(
        `http://localhost:8080/api/inventories/${inventoryItemID}`,
        inventoryItemDetails
      )
      .catch((error) => {
        console.log(error);
      });
    navigate(-1, { state: { updatedItem: inventoryItemDetails } });
  };

  if (!inventoryItemDetails || !currentWarehouse || !warehouseList) {
    return <>Loading...</>;
  }

  return (
    <div className="edit-inventory">
      <div className="edit-inventory__header">
        <Link to={`/inventory`} className="warehouse-details__back">
          <img
            src={BackArrow}
            alt="Back Arrow"
            className="edit-inventory__back-arrow"
          />
        </Link>
        <p className="edit-inventory__title">Edit Inventory Item</p>
      </div>
      <form className="edit-inventory__form" onSubmit={handleOnSubmit}>
        <div className="edit-inventory__form-inputs">
          <div className="edit-inventory__details edit-inventory__details--border">
            <p className="edit-inventory__details-title">Item Details</p>
            <label className="edit-inventory__label">
              Item Name
              <div className="edit-inventory__container">
                <input
                  type="text"
                  name="item_name"
                  className={`${
                    emptyNameError
                      ? "edit-inventory__input edit-inventory__input--error"
                      : "edit-inventory__input"
                  }`}
                  value={inventoryItemDetails.item_name}
                  onChange={handleOnChange}
                />
                {emptyNameError && (
                  <div className="edit-inventory__error edit-inventory__error--name">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="edit-inventory__error-icon"
                    />
                    <p className="edit-inventory__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </label>

            <label className="edit-inventory__label">
              Description
              <div className="edit-inventory__container">
                <textarea
                  name="description"
                  value={inventoryItemDetails.description}
                  onChange={handleOnChange}
                  className={`${
                    emptyDescriptionError
                      ? "edit-inventory__input edit-inventory__input--description edit-inventory__input--error"
                      : "edit-inventory__input edit-inventory__input--description"
                  }`}
                />
                {emptyDescriptionError && (
                  <div className="edit-inventory__error edit-inventory__error--description">
                    <img
                      src={ErrorIcon}
                      alt="Error Icon"
                      className="edit-inventory__error-icon"
                    />
                    <p className="edit-inventory__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </label>
            <label className="edit-inventory__label">
              Category
              <select
                type="text"
                name="category"
                value={inventoryItemDetails.category}
                onChange={handleOnChange}
                className="edit-inventory__input"
              >
                {categoryList.map((category) => {
                  return <option value={category}>{category}</option>;
                })}
              </select>
            </label>
          </div>
          <div className="edit-inventory__details">
            <p className="edit-inventory__details-title">Item Availability</p>
            <label className="edit-inventory__label">
              Status
              <div className="edit-inventory__radio-container">
                <div className="edit-inventory__radio-block">
                  <input
                    type="radio"
                    name="status"
                    value="In Stock"
                    className="edit-inventory__radio"
                    checked={inventoryItemDetails.status === "In Stock"}
                    onChange={handleOnChange}
                  />
                  <label
                    htmlFor="instock"
                    className="edit-inventory__instock-label"
                  >
                    In stock
                  </label>
                </div>
                <div className="edit-inventory__radio-block">
                  <input
                    type="radio"
                    name="status"
                    value="Out of Stock"
                    className="edit-inventory__radio"
                    checked={inventoryItemDetails.status === "Out of Stock"}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="outstock">Out of stock</label>
                </div>
              </div>
            </label>
            {inStock && (
              <label className="edit-inventory__label">
                Quantity
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
              </label>
            )}
            <label className="edit-inventory__label">
              Warehouse
              <select
                type="text"
                name="warehouse_id"
                onChange={handleOnChange}
                className="edit-inventory__input"
                value={currentWarehouse ? currentWarehouse.id : ""}
              >
                {warehouseList.map((warehouse) => {
                  return (
                    <option key={warehouse.id} value={warehouse.id}>
                      {warehouse.warehouse_name}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
        </div>
        <div className="edit-inventory__footer">
          <Link to={-1} className="edit-inventory__cancel-link">
            <button className="edit-inventory__button edit-inventory__button--cancel">
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="edit-inventory__button edit-inventory__button--save"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
