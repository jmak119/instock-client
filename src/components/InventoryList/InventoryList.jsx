import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/chevron_right-24px.svg";
import DeleteButton from "../../assets/icons/delete_outline-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import Modal from '../Modal/Modal';
import axios from 'axios';

import "./InventoryList.scss";

export default function InventoryList({ inventoryList, warehouseList }) {

    // // Modal start
    // const [modal, setModal] = useState(false);
    // const [modalInventoryName, setModalInventoryName] = useState('');
    // const [modalInventoryId, setModalInventoryId] = useState('');

    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const openModal = (inventoryName, inventoryId) => {
    //     setModal(true);
    //     setIsModalOpen(true);
    //     setModalInventoryName(inventoryName);
    //     setModalInventoryId(inventoryId);
    // };

    // const closeModal = () => {
    //     setModal(false);
    //     setIsModalOpen(false);
    // };

    // // useEffect for modal
    // useEffect(() => {
    //     const body = document.querySelector('body');
    //     if (isModalOpen) {
    //         body.classList.add('active-modal');
    //     } else {
    //         body.classList.remove('active-modal');
    //     }
    // }, [isModalOpen]);

    // // Modal end

    return (
        <>
            <div className="item-list">
                {inventoryList.map((inventory) => {
                    return (
                        <div className="item-list__container" key={inventory.id}>

                            <div className="item-list__inventory-container">
                                <h4 className="item-list__info-heading">INVENTORY</h4>
                                <div className="item-list__item item-list__inventory">
                                    <Link className='item-list__link' to={`/inventory/details/${inventory.id}`}>
                                        <p className='item-list__item-name'>{inventory.item_name}</p>
                                    </Link>
                                    <img src={Arrow} className='item-list__icon-arrow' alt arrow-icon />
                                </div>
                            </div>

                            <div className='item-list__category-container'>
                                <h4 className='item-list__info-heading'>CATEGORY</h4>
                                <p className='item-list__item item-list__category'>{inventory.category}</p>
                            </div>

                            <div className='item-list__status-container'>
                                <h4 className='item-list__info-heading'>STATUS</h4>
                                <p className={`item-list__status ${inventory.status === 'In Stock' ? 'item-list__status--in-stock' : 'item-list__status--out-of-stock'}`}>{inventory.status}</p>
                            </div>

                            <div className='item-list__qty-container'>
                                <h4 className='item-list__info-heading'>QTY</h4>
                                <p className='item-list__item item-list__qty'>{inventory.quantity}</p>
                            </div>

                            <div className='item-list__warehouse-container'>
                                <h4 className='item-list__info-heading'>WAREHOUSE</h4>
                                {/* use filter to match the warehouse name to the item id */}
                                <p className='item-list__item item-list__warehouse'>{
                                    warehouseList.filter((warehouse) => {
                                        return (
                                            warehouse.id === inventory.warehouse_id
                                        )
                                    })[0].warehouse_name
                                }</p>
                            </div>

                            <div className="item-list__buttons-container">
                                <img
                                    // onClick={() => openModal(inventory.inventory_name, inventory.id)}
                                    src={DeleteButton}
                                    className="item-list__button"
                                />
                                {/* <Modal isOpen={modal} onClose={closeModal} inventoryName={modalInventoryName} inventoryId={modalInventoryId} /> */}
                                <Link className='item-list__link' to={`/inventory/edit/${inventory.id}`}>
                                    <img
                                        src={EditButton}
                                        className='item-list__button'
                                    />
                                </Link>
                            </div>

                        </div>
                    )
                }
                )}
            </div>
        </>
    )
}