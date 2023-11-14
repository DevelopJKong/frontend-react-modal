import { useRef, useState } from 'react';
import Modal from 'react-modal';

function App() {
  let subtitle: any = null;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [childrenIsOpen, setChildrenIsOpen] = useState(false);

  const modalTopRef = useRef<any>(null);
  const buttonTopRef = useRef<any>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openChildrenModal = () => {
    setChildrenIsOpen(true);
  };

  const closeChildrenModal = () => {
    setChildrenIsOpen(false);
    modalTopRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '95vw',
      height: '90vh',
    },
  };

  const customChildrenStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '50vw',
      height: '50vh',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <button onClick={openModal} ref={buttonTopRef}>
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div style={{ display: 'hidden' }} ref={modalTopRef} />
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>
          I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I
          am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal v I am a modal I am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I
          am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modal v I am a modal I am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I
          am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modal v I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I
          am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal v
          I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I
          am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal v I am a modal I am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I
          am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modal v I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I
          am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modal v I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I
          am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I
          am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal v I am a modal I am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modal I am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I
          am a modal I am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modal I am a modal I am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modal v I am a modal I am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am
          a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI
          am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a modalI am a
          modalI am a modalI am a modalI am a modalI am a modal
          <button type='button' onClick={openChildrenModal}>
            top
          </button>
          <Modal
            isOpen={childrenIsOpen}
            onRequestClose={closeChildrenModal}
            style={customChildrenStyles}
            contentLabel='Example Modal'
          ></Modal>
        </div>
      </Modal>
    </div>
  );
}

export default App;
