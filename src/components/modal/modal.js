/**
 * Modal component for the calendar
 * @function Modal - with handlePickFriend and boleean isOpen
 * @param modalIsOpen - the open state of the modal
 * @param setIsOpen - setting the open state of the modal
 * @param openModal - sets the state of the modal to isOpen
 * @param closeModal - sets the state of the modal to isOpen(false) = closed
 */

import React, { useState } from "react";
import ModalSearch from "../modalsearch/modalsearch";

function Modal({handlePickFriend, isOpen}) {
  const [modalIsOpen, setIsOpen] = useState(isOpen);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className="AppModal">
      {modalIsOpen && (
        <div className="overlay">
          <div className="modal">
            <header className="modalHeader">
              <h2>Book Friend Event</h2>
              <button onClick={closeModal} className="close-button">&times;</button>
            </header>
            <main className="modalMain">
            <ModalSearch onClick={modalIsOpen} />
            </main>
          </div>
        </div>
      )}

      <h2>Select Friend</h2>
      <button className="buttonModal" onClick={openModal}>Open Modal</button>
    </div>
  );
}


export default Modal;