import './App.css';
import { useState } from 'react'

function Main() {
  const [ visible, setVisible ] = useState(false)
  
  const showOrHideModal = () => {
    setVisible(!visible)
  }

  return (
    <>
      <ModalButton setModalDispay={showOrHideModal}>Show modal</ModalButton>
      <Modal setModalDispay={showOrHideModal} visible={visible}/>
    </>
  )
}

function Modal({ setModalDispay, visible }) {

  return (
    <div className={visible ? "container visible" : "container"}>
      <div className="modal">
        <ModalButton setModalDispay={setModalDispay}>Close button</ModalButton>
      </div>
    </div>
  );
}

function ModalButton({ children, setModalDispay }) {
  return (
    <button
      className="modal-btn"
      onClick={setModalDispay}
    >
      {children}
    </button>
  )
}

export default Main;
