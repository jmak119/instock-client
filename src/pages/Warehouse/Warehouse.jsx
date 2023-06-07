import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Warehouse.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";
import Arrow from "../../assets/icons/chevron_right-24px.svg";
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import { apiUrl } from "../../utilities/api";


export default function Warehouse() {
  return (
    <>
      <section className="warehouse">
        <div className="warehouse__header-container">
          <h1 className="warehouse__title">Warehouses</h1>
          <div className="warehouse__search-container">
            <form className="warehouse__searchbar-form">
              <input
                type="text"
                className="warehouse__searchbar-input"
                id="searchbar"
                name="searchbar"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="warehouse__searchbar-icon"
              ></button>
            </form>
            <button className="warehouse__add-warehouse-button">
              + Add New Warehouse
            </button>
          </div>
        </div>

    const [ warehouseList, setWarehouseList ] = useState();

    useEffect(() => {
        axios
            .get(`${apiUrl}/api/warehouses`)
            .then((response) => {
                setWarehouseList(response.data)
            }).catch(err => {
                console.error(err);
            })
    }, [])

    if (!warehouseList) {
        return <span>Loading...</span>
    }

    return (
        <>
        <section className="warehouse">
            <div className="warehouse__header-container">
                <h1 className="warehouse__title">Warehouses</h1>
                <div className="warehouse__search-container">
                    <form className="warehouse__searchbar-form">
                        <input
                            type="text"
                            className="warehouse__searchbar-input"
                            id="searchbar"
                            name="searchbar"
                            placeholder="Search..."
                        />
                        <button
                            type="submit"
                            className="warehouse__searchbar-icon"
                        >
                        </button>
                    </form>
                    <button className="warehouse__add-warehouse-button">
                        + Add New Warehouse
                    </button>
                </div>
            </div>
            <div className="warehouse__titles warehouse__titles-address">
              <h4 className="warehouse__heading warehouse__heading-address">
                ADDRESS
              </h4>
              <img
                src={sortIcon}
                className="warehouse__heading-icon"
                alt="sorting icon"
              />
            </div>
        </section >
        <WarehouseList 
            warehouseList = {warehouseList}/>
        </>
    );
};

