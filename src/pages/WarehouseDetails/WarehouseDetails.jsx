import React, { useState, useEffect } from "react";
import "./WarehouseDetails.scss";
import { useParams, Link, useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import DeleteButton from "../../assets/icons/delete_outline-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import { apiUrl } from "../../utilities/api";
import sort from "../../assets/icons/sort-24px.svg";
import axios from "axios";
import arrowside from "../../assets/icons/chevron_right-24px.svg";
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
        {/* <div className="warehouse-details__middle--container"> */}
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
          <p className="warehouse-details__middle-name">CONTACT INFORMATION:</p>
          <p className="warehouse-details__middle-name-item">
            {warehouseDetails.contact_phone}
          </p>
          <p className="warehouse-details__middle-name-item">
            {warehouseDetails.contact_email}
          </p>
        </div>
        {/*  </div> */}
      </div>

      <section className='inventory-list-top'>
        <div className='inventory-list-top__head'>
        <div className='inventory-list-top__row'>
            <div className='inventory-list-top__item'>
              <p className='inventory-list-top__text'>INVENTORY ITEM</p>
              <img src={sort}/>
            </div>

            <div className='inventory-list-top__item'>
              <p className='inventory-list-top__text'> CATEGORY</p>
              <img src={sort}/>
            </div>

            <div className='inventory-list-top__item'>
              <p className='inventory-list-top__text'>STATUS</p>
              <img src={sort}/>
            </div>
        </div>

        <div className='inventory-list-top__row'>
            <div className='inventory-list-top__item'>
              <p className='inventory-list-top__text'>QUANTITY</p>
              <img src={sort}/>
            </div>

            <div className='inventory-list-top__item'>
              <p className='inventory-list-top__text'>ACTIONS</p>
              <img src={sort}/>
            </div>

            
        </div>


        </div>


      </section>

      {/* Inventory Section */}
      {inventoryList.map((inventory) => {
        return (


          <div className="inventory-list__container" key={warehouseDetails.id}>
          
  <div className="inventory-list__text-box">
    <div className="inventory-list__column">
      <div className="inventory-list__content inventory-list__content--box">
        <h3 className="inventory-list__mobile-header">INVENTORY ITEM</h3>
        <div className="inventory-list__item-box">
          <p className="inventory-list__item-name">{inventory.item_name}</p>
          <img src={arrowside} alt="arrow icon" />
        </div>
      </div>
      <div className="inventory-list__content inventory-list__content--long">
        <h3 className="inventory-list__mobile-header">CATEGORY</h3>
        <p className="inventory-list__item-name--category">{inventory.category}</p>
      </div>
    </div>
    <div className="inventory-list__column">
      <div className="inventory-list__content inventory-list__content--box">
        <h3 className="inventory-list__mobile-header">STATUS</h3>
        <p className={`inventory-list__status ${inventory.status === 'In Stock' ? 'inventory-list__status--in-stock' : 'inventory-list__status--out-of-stock'}`}>{inventory.status}</p>
      </div>
      <div className="inventory-list__content inventory-list__content--long">
        <h3 className="inventory-list__mobile-header">QTY</h3>
        <p className="inventory-list__item-name">{inventory.quantity}</p>
      </div>
    </div>
  </div>
  <div className="inventory-list__action">
    <img src={DeleteButton} alt="delete icon" className="inventory-list__icon" />
    <Link to={`/inventory/${id}/edit`} className="inventory-list__link">
      <img src={EditButton} alt="edit icon" className="inventory-list__icon" />
    </Link>
  </div>
</div>



                        
        );
      })}
    </div>
  
  );
}
