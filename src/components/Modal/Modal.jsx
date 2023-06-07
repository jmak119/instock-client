// Modal.js

import React from 'react';
import './Modal.scss';
import closeicon from '../../assets/icons/close-24px.svg'

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return false;

  return (
    <div className='modal'>
      <div onClick={onClose} className='overlay'></div>
      <div className='modal-content'>
        <h2>Delete Washington warehouse</h2>
        <p>Please confirm that you'd like to delete the Washington warehouse from the list. This action cannot be undone.</p>
        <img onClick={onClose} className='close-modal' src={closeicon} alt='Close' />
        <div className='modal__buttons'>
          <button onClick={onClose} className='modal__buttons--close'>Close</button>
          <button className='modal__buttons--delete'>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
