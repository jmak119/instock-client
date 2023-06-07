import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/chevron_right-24px.svg";
import DeleteButton from "../../assets/icons/delete_outline-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import Modal from '../Modal/Modal';


import "./WarehouseList.scss";


export default function WarehouseList() {
    const [modal, setModal] = useState(false);

    const openModal = () => {
      setModal(true);
    };
  
    const closeModal = () => {
      setModal(false);
    };
  
    // const openModal
  return (
<>


<div className="warehouse-list">
    <div className="warehouse-list__container">
        <div className="warehouse-list__details warehouse-list__details-location">
            <div className="warehouse-list__city-container">
                <h4 className="warehouse-list__info-heading">WAREHOUSE</h4>
                <div className="warehouse-list__city">
                    <Link to={"/"}>
                        <p className="warehouse-list__city-name">Manhatten</p>
                    </Link>
                    <img src={Arrow} className="warehouse-list__icon-arrow" alt="arrow icon" />
                </div>
            </div>
            <div className="warehouse-list__address-container">
                <h4 className="warehouse-list__info-heading">ADDRESS</h4>
                <p className="warehouse-list__address">address, city, country</p>
            </div>
        </div>

        <div className="warehouse-list__details warehouse-list__details-contact">
            <div className="warehouse-list__contact-container">
                <h4 className="warehouse-list__info-heading">CONTACT NAME</h4>
                <p className="warehouse-list__contact-name">contact name</p>
            </div>
            <div className="warehouse-list__contact-info-container">
                <h4 className="warehouse-list__info-heading">CONTACT INFORMATION</h4>
                <p className="warehouse-list__contact-info">contact phone</p>
                <p className="warehouse-list__contact-info">contact email</p>
            </div>
        </div>

        <div className="warehouse-list__buttons-container">
            <img 
                onClick={openModal}
                src= { DeleteButton } 
                className='warehouse-list__button warehouse-list__button-delete' 
                // onClick={ openModal } 
            />
            <Modal isOpen={modal} onClose={closeModal} />
            <img 
                src = { EditButton }
                className='warehouse-list__button warehouse-list__but  ton-edit'
            />
        </div>
    </div>


</div>
</>
  )
}
