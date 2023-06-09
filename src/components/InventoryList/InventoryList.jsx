import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/chevron_right-24px.svg";
import DeleteButton from "../../assets/icons/delete_outline-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import Modal from '../Modal/Modal';
import axios from 'axios';

import "./InventoryList.scss";

export default function InventoryList({ inventoryList }) {

    console.log(inventoryList)

    return (
        <>
            <div className="inventory-list">
                {inventoryList.map((inventory) => {
                    return (
                        <div className="inventory-list__container">
                            <div className="inventory-list__details inventory-list__details-item">
                                <div className="inventory-list__item-container">
                                    <h4 className="inventory-list__info-heading">INVENTORY ITEM</h4>
                                    <div className="inventory-list__item">
                                        <Link className='inventory-list__link' to ={"/inventory/" + inventory.id}>
                                            <p className='inventory-list__item-name'>{inventory.item_name}</p>
                                        </Link>
                                        <img src={Arrow} className="inventory-list__icon-arrow" alt="arrow icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                     )
                })};  
                
            </div>
        </>
    )
}