import React from "react";
import {useState, useEfect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Warehouse.scss";
import Arrows from "../../assets/icons/sort-24px.svg"

const WarehouseList = () => {

    return (
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
                    <Link to="/" className="warehouse__add-warehouse-button">
                        + Add New Warehouse
                    </Link>
                </div>
            </div>
            <div className="warehouse__headings-container">
                <div className="warehouse__headings">
                    <div className="warehouse__titles warehouse__titles-warehouse">
                        <h4 className="warehouse__heading warehouse__heading-warehouse">WAREHOUSE</h4>
                        <img src = { Arrows } className="warehouse__headings-icon" alt="arrows" />
                    </div>
                    <div className="warehouse__titles warehouse__titles-address">
                        <h4 className="warehouse__heading warehouse__heading-address">ADDRESS</h4>
                        <img src = { Arrows } className="warehouse__headings-icon" alt="arrows" />
                    </div>
                    <div className="warehouse__titles warehouse__titles-contact-name">
                        <h4 className="warehouse__heading warehouse__heading-contact-name">CONTACT NAME</h4>
                        <img src = { Arrows } className="warehouse__headings-icon" alt="arrows" />
                    </div>
                    <div className="warehouse__titles warehouse__titles-contact-info">
                        <h4 className="warehouse__heading warehouse__heading-contact-info">CONTACT INFORMATION</h4>
                        <img src = { Arrows } className="warehouse__headings-icon" alt="arrows" />
                    </div>
                    <div className="warehouse__titles warehouse__titles-actions">
                        <h4 className="warehouse__heading warehouse__heading-actions">ACTIONS</h4>
                    </div>
                </div>
            </div>





        </section>
    );
};

export default WarehouseList;