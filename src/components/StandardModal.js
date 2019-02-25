import React from 'react';
import Modal from 'react-modal';

import '../assets/styles/components/Modal.css';

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
    className='modal'
  >
    {content ? content: null}
  </Modal>
);

export default StandardModal;
