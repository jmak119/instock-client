import React, { useState, useEffect } from "react";
import "./WarehouseDetails.scss";
import { useParams, Link, useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import DeleteButton from "../../assets/icons/delete_outline-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import { apiUrl } from "../../utilities/api";
import axios from "axios";

export default function WarehouseDetails() {
  const navigateTo = useNavigate();

  const [warehouseDetails, setWarehouseDetails] = useState();
  const [inventoryList, setInventoryList] = useState();
  const { id } = useParams(); // Retrieve the 'id' parameter from the URL

  console.log(id); // Log the retrieved ID to the console

  // useEffect for Details component
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/warehouses/${id}`)
      .then((response) => {
        setWarehouseDetails(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/inventories/warehouse/${id}`)
      .then((response) => {
        setInventoryList(response.data);
        console.log(response.data); // Log the inventory list to the console
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!warehouseDetails || !inventoryList) {
    return <span>Loading...</span>;
  }

  console.log(warehouseDetails);
  console.log(inventoryList);

  return (
    <div className="warehouse-details">
      <div className="warehouse-details__top">
        <div className="warehouse-details__top--name">
          <img src={arrow} alt="Arrow" />
          <h1>{warehouseDetails.warehouse_name}</h1>
        </div>
        <img
          src={edit}
          alt="Edit"
          onClick={() => navigateTo(`/warehouse/edit/${id}`)}
        />
      </div>

      <div className="warehouse-details__middle">
        <div className="warehouse-details__middle--top">
          <p className="warehouse-details__middle-address">WAREHOUSE ADDRESS</p>
          <p className="warehouse-details__middle-address-item">
            {warehouseDetails.address}
          </p>
          <p className="warehouse-details__middle-address-item">
            {warehouseDetails.city}
          </p>
        </div>
        <div className="warehouse-details__middle--container">
          <div className="warehouse-details__middle--container--contact">
            <p className="warehouse-details__middle-name">CONTACT NAME:</p>
            <p className="warehouse-details__middle-name-item">
              {warehouseDetails.contact_name}
            </p>
            <p className="warehouse-details__middle-name-item">
              {warehouseDetails.contact_position}
            </p>
          </div>
          <div className="warehouse-details__middle--container--contact">
            <p className="warehouse-details__middle-name">
              CONTACT INFORMATION:
            </p>
            <p className="warehouse-details__middle-name-item">
              {warehouseDetails.contact_phone}
            </p>
            <p className="warehouse-details__middle-name-item">
              {warehouseDetails.contact_email}
            </p>
          </div>
        </div>
      </div>

      {/* Inventory Section */}
      {inventoryList.map((inventory) => {
        return (
          <div className="warehouse-details__inventory" key={inventory.id}>
            <div className="warehouse-details__bottom">
              <div className="warehouse-details__bottom--inventory">
                <div className="warehouse-details__bottom--inventory--item">
                  <p className="warehouse-details__bottom--inventory--text">
                    INVENTORY ITEM
                  </p>
                  <p className="warehouse-details__bottom--inventory--inventory">
                    {inventory.item_name}
                  </p>
                </div>
                <div className="warehouse-details__bottom--inventory--item">
                  <p className="warehouse-details__bottom--inventory--text">
                    CATEGORY
                  </p>
                  <p className="warehouse-details__bottom--inventory--category">
                    {inventory.category}
                  </p>
                </div>
              </div>
              <div className="warehouse-details__bottom--inventory">
                <div className="warehouse-details__bottom--inventory--item">
                  <p className="warehouse-details__bottom--inventory--text">
                    STATUS
                  </p>
                  <p className="warehouse-details__bottom--inventory--status">
                    {inventory.status}
                  </p>
                </div>
                <div className="warehouse-details__bottom--inventory--item">
                  <p className="warehouse-details__bottom--inventory--text">
                    QTY
                  </p>
                  <p className="warehouse-details__bottom--inventory--QTY">
                    {inventory.quantity}
                  </p>
                </div>
              </div>
            </div>
            <div className="warehouse-details__inventory--actions">
              <img src={DeleteButton} alt="Delete" />
              <Link to={`/inventory/edit/${inventory.id}`}>
                <img src={EditButton} alt="Edit" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
