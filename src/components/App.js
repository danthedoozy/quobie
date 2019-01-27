import React, { Component } from 'react';
import Modal from 'react-modal';
import Nav from './Nav';
import AddQuote from './features/AddQuote';
import Discover from './Discover';
import Footer from './Footer';
import '../assets/styles/App.css';

Modal.setAppElement('#root');

class App extends Component {
  // This state is theoretical (we will likely add some state management)
  state = {
    user: {},
    currentQuote: null, //Quote ID
    clapCount: 0, // Figure out a way to allow only a certain number of claps per quote ID
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const {
      state: {
        user,
        currentQuote,
        clapCount,
        modalIsOpen,
      },
      openModal,
      closeModal,
    } = this;

    return (
      <div className="App">
        <Nav openModal={openModal} />
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <AddQuote closeModal={closeModal} />
        </Modal>
        <Discover />
        <Footer />
      </div>
    );
  }
}

export default App;
