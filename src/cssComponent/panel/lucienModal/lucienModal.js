import React, { useEffect, useRef, useState } from "react";
import styles from "./lucienModal.module.css";
import "prop-types";
export default function LucienModal(props) {
  console.log("props.open", props.open);
  const modalRef = useRef();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  const close = () => {
    modalRef.current.classList.toggle(styles.dismiss);
    document.body.style.overflow = "";
    props.onClose();
  };

  return (
    <div
      className={props.open ? styles.modalWrapper : styles.dismiss}
      ref={modalRef}
    >
      <div className={styles.backdrop}>
        <div className={styles.contentWrapper}>
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
            <button>Okay</button>
            <button onClick={close}>Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  );
}
