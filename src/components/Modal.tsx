import React from 'react';
import styles from "./Modal.module.css";

type Props = {
  // Prop p/ enviar componentes de fora p/ cá
  children: React.ReactNode;
}

function Modal({children}: Props) {

  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  }

  return (
    <div id="modal" className='hide'>
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Text modal</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal