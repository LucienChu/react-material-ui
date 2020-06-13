import React, { useEffect, useRef, useState } from "react";
import styles from "./lucienModal.module.scss";
import "prop-types";
export default function LucienModal({ open, color, onClose }) {
  const modalRef = useRef();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);
  const close = () => {
    modalRef.current.classList.toggle(styles.dismiss);
    document.body.style.overflow = "";
    onClose();
  };

  useEffect(() => {
    if (color) {
      console.log("toggling color", modalRef.current.classList);
      modalRef.current.classList.toggle(styles.primary);

      console.log("toggling color", modalRef.current.classList);
    }
  }, [color]);

  return (
    <div className={open ? styles.modalWrapper : styles.dismiss} ref={modalRef}>
      <div className={styles.backdrop}>
        <div className={`${styles.contentWrapper} ${styles[color]}`}>
          <div className={styles.titleDiv}>
            <h1>Password error</h1>
          </div>
          <div className={styles.contentDiv}>
            <h2>
              It turns out that you have enter a wrong password, please try
              again
            </h2>
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.irisButton} onClick={() => {}}>
              Okay
            </button>
            <button className={styles.irisButton} onClick={close}>
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
