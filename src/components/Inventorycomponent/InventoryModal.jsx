import React from 'react';
import './InventoryModal.scss';
import closeicon from '../../assets/icons/close-24px.svg';
import axios from 'axios';
import { apiUrl } from '../../utilities/api';

const InventoryModal = ({ isOpen, onClose, inventoryName, inventoryId }) => {
  const handleInventoryDelete = () => {
    axios
      .delete(`${apiUrl}/api/inventories/${inventoryId}`)
      .then((response) => {
        console.log('Inventory item deleted successfully');
        onClose(); // Close the modal
        window.location.reload(); // Refresh the page
      })
      .catch((error) => {
        console.error('Error deleting inventory item:', error);
        // Handle error if needed
      });
  };

  if (!isOpen) return null;

  return (
    <div className='inventory-modal'>
      <div onClick={onClose} className='inventory-overlay'></div>
      <div className='inventory-modal-content'>
        <div className='inventory-modal-content__mobile'>
          <div className='inventory-modal-content__text-close'>
            <div className='inventory-close-modal-box'>
              <img onClick={onClose} className='inventory-close-modal' src={closeicon} alt='Close' />
            </div>
            <div className='inventory-modal-content__text-item'>
              <div className='inventory-modal-content__text-item--text'>
              
                <h2 className='inventory-modal-content__text-item--header'>Delete {inventoryName} item</h2>
                <p className='inventory-modal-content__text-item--paragraph'>
                  Please confirm that you'd like to delete the {inventoryName} warehouse from the list. This action cannot be undone.
                </p>
              </div>
              <div className='inventory-modal__buttons'>
                <button onClick={onClose} className='inventory-modal__buttons--close'>
                  Close
                </button>
                <button className='inventory-modal__buttons--delete' onClick={handleInventoryDelete}>
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

export default InventoryModal;
