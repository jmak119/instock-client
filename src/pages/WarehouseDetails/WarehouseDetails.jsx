import React from 'react'
import './WarehouseDetails.scss';
import arrow from '../../assets/icons/arrow_back-24px.svg'
import edit from '../../assets/icons/edit-24px.svg'

export default function WarehouseDetails() {
  return (
    <div className='warehouse-details'>

      <div className='warehouse-details__top'>
            <div className='warehouse-details__top--name'>
                <img src={arrow}/>
                <h1>Washington</h1>
            </div>
            <img src={edit}/>
      </div>

    </div>
  )
}