import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Inventory.scss";
import HowtoUseModal from '../../components/HowtoUseModal/HowtoUseModal';
import { apiUrl } from "../../utilities/api";
import sortIcon from "../../assets/icons/sort-24px.svg";
import InventoryList from "../../components/InventoryList/InventoryList";

export default function Inventory() {

  const [inventoryList, setInventoryList] = useState();

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/inventories`)
      .then((response) => {
        setInventoryList(response.data);
      }).catch(err => {
        console.error(err);
      })
  }, [])

  if (!inventoryList) {
    return <span>Loading...</span>
  }

  return (
    <>
      <section className="inventory">
        <div className="inventory__header-container">
          <h1 className="inventory__title">Inventory</h1>
          <div className="inventory__search-container">
            <form className="inventory__searchbar-form">
              <input
                type="text"
                className="inventory__searchbar-input"
                id="searchbar"
                name="searchbar"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="inventory__searchbar-icon"
              >
              </button>
            </form>
            <button className="inventory__add-inventory-button">
              + Add New Item
            </button>
          </div>
        </div>

        <div className="inventory__headings-container">
          <div className="inventory__headings">
            <div className="inventory__titles inventory__titles-inventory">
              <h4 className="inventory__heading inventory__heading-inventory">INVENTORY</h4>
              <img src={sortIcon} className="inventory__heading-icon" alt="sorting icon" />
            </div>
            <div className="inventory__titles inventory__titles-category">
              <h4 className="inventory__heading inventory__heading-category">CATEGORY</h4>
              <img src={sortIcon} className="inventory__heading-icon" alt="sorting icon" />
            </div>
            <div className="inventory__titles inventory__titles-status">
              <h4 className="inventory__heading inventory__heading-contact-name">STATUS</h4>
              <img src={sortIcon} className="inventory__heading-icon" alt="sorting icon" />
            </div>
            <div className="inventory__titles inventory__titles-qty">
              <h4 className="inventory__heading inventory__heading-qty">QTY</h4>
              <img src={sortIcon} className="inventory__heading-icon" alt="sorting icon" />
            </div>
            <div className="inventory__titles inventory__titles-warehouse">
              <h4 className="inventory__heading inventory__heading-warehouse">WAREHOUSE</h4>
              <img src={sortIcon} className="inventory__heading-icon" alt="sorting icon" />
            </div>
            <div className="inventory__titles inventory__titles-actions">
              <h4 className="inventory__heading inventory__heading-warehouse">ACTIONS</h4>
            </div>
          </div>
        </div>
      </section >
      <InventoryList inventoryList={inventoryList} />
    </>
  )
}
