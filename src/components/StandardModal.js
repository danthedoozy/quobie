import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const StandardModal = ({
  content,
  modalIsOpen,
  afterOpenModal,
  closeModal,
}) => (
  <Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
  >
    {content ? content: null}
  </Modal>
);

export default StandardModal;
