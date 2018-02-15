import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
     isOpen={!!props.selectOption} 
     onRequestClose={props.handleClearOption}
     ContentLabel="Selected Option"
     ariaHideApp={false}
     cloaseTimeoutMS={200}
     className="modal">
        <h3 className="modal__title"> Selected Option </h3>
        {props.selectOption && <p className="modal__body">{props.selectOption}</p>}
        <button className="button" onClick={props.handleClearOption}> OK </button>
    </Modal>
);

export default OptionModal;