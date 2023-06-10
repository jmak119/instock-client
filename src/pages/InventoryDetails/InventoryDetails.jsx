import React, { useEffect, useState } from "react";
import './InventoryDetails.scss';
import { useParams, Link, useNavigate } from "react-router-dom";
import Arrowback from "../../assets/icons/arrow_back-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import { apiUrl } from "../../utilities/api";
import axios from "axios";





export default function InventoryDetails() {
  const navigateTo = useNavigate();

  const [inventoryItem, setInventoryItem] = useState();
  const [warehouseList, setWarehouseList] = useState([]);

  const { id } = useParams(); // Retrieve the 'id' parameter from the URL



  useEffect(() => {
    axios
    
    .get(`${apiUrl}/api/inventories/${id}`)
    .then((response) => {
         setInventoryItem(response.data);
         console.log(response.data); // Log the inventory list to the console
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // list of warehouses 

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/warehouses`)
      .then((response) => {
        setWarehouseList(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);



  

  if (!inventoryItem) {
    return <span>Loading...</span>;
  }

  const matchingWarehouse = warehouseList.find(
    (warehouse) => warehouse.id === inventoryItem.warehouse_id
  );
  
  
  return (
   <section className='inventory-details'>

   <div className='inventory-details__header'>
   <div className='inventory-details__header__long'>
    <img src={Arrowback} onClick={() => navigateTo(-1)}/>
    <p className='inventory-details__header--text'>{inventoryItem.item_name}</p>
   </div>

   <Link className='inventory-details__header--link' to={`/inventory/edit/${inventoryItem.id}`}>

   <div className="inventory-details__header--circle">
    
     <img src={EditButton} className='inventory-details__header--img'/>
     <p className="inventory-details__header--circle-text">Edit</p>
     </div>
     </Link>
   </div>


   <div className='inventory-details__description'>
        <div className='inventory-details__description--box'>
        <p className='inventory-details__description--header'> ITEM DESCRIPTION</p>
        <p className='inventory-details__description--text inventory-details__description--text--description'> {inventoryItem.description}</p>
           
        <p className='inventory-details__description--header'>CATEGORY</p>
        <p className='inventory-details__description--text'> {inventoryItem.category}</p>
        </div>

        <div className='inventory-details__description--box inventory-details__description--box--tablet'>
        <div className='inventory-details__description--box-item'>
        <div className='inventory-details__description--box--itembox'>
        <p className='inventory-details__description--header'>Status: </p>
        
        <p
                    className={`inventory-details__description--status ${
                      inventoryItem.status === "In Stock"
                        ? "inventory-details__description--status--in-stock"
                        : "inventory-details__description--status--out-of-stock"
                    }`}
                  >{inventoryItem.status}</p>
        </div>

        <div className='inventory-details__description--box--itembox'>
        <p className='inventory-details__description--header'>QUANTITY: </p>
        <p className='inventory-details__description--text'> {inventoryItem.quantity}</p>
        </div>
        </div>
          
        <p className='inventory-details__description--header'>Warehouse:</p>
        <p className='inventory-details__description--text'>{matchingWarehouse ? matchingWarehouse.warehouse_name : ''}</p>
        </div>
   </div>

   </section>
  )
}
