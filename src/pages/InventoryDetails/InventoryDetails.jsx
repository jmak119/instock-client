import React from 'react'
import './InventoryDetails.scss';
import Arrowback from "../../assets/icons/arrow_back-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";

export default function InventoryDetails() {
  return (
   <section className='inventory-details'>

   <div className='inventory-details__header'>
   <div className='inventory-details__header__long'>
    <img src={Arrowback}/>
    <p>Television</p>
   </div>

     <img src={EditButton} className='inventory-details__header--img'/>
   </div>

   </section>
  )
}
