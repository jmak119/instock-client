import React, { useState } from 'react';
import './Modal.scss';
import closeicon from '../../assets/icons/close-24px.svg';
import axios from 'axios';
import { apiUrl } from '../../utilities/api';

const WarehouseModal = ({ isOpen, onClose, warehouseName, warehouseId }) => {

  const handleDelete = () => {
    axios
      .delete(`${apiUrl}/api/warehouses/${warehouseId}`)
      .then((response) => {
        console.log('Warehouse deleted successfully');
        onClose(); // Close the modal
        window.location.reload(); // Refresh the page
      })
      .catch((error) => {
        console.error('Error deleting warehouse:', error);
        // Handle error if needed
      });
  };

  if (!isOpen) return null;

  return (
    <div className='modal'>
      <div onClick={onClose} className='overlay'></div>
      <div className='modal-content'>
        <div className='modal-content__mobile'>
          <div className='modal-content__text-close'>
          <div className='close-modal-box'>
            <img onClick={onClose} className='close-modal' src={closeicon} alt='Close' />
            </div>
            <div className='modal-content__text-item'>
              <div className='modal-content__text-item--text'>
                <h2 className='modal-content__text-item--header'>Delete {warehouseName} warehouse</h2>
                <p className='modal-content__text-item--paragraph'>
                  Please confirm that you'd like to delete the {warehouseName} warehouse from the list. This action cannot be undone.
                </p>
              </div>
              <div className='modal__buttons'>
                <button onClick={onClose} className='modal__buttons--close'>
                  Close
                </button>
                <button className='modal__buttons--delete' onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseModal;
