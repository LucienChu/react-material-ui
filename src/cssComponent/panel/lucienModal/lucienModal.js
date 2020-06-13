import React, { useEffect, useRef, useState } from "react";
import styles from "./lucienModal.module.scss";
import PropTypes from "prop-types";

export default function LucienModal({ open, color, onClose, title, message }) {
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
            <p className={styles.title}>{title}</p>
          </div>
          <div className={styles.contentDiv}>
            <p className={styles.message}>{message}</p>
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

LucienModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  color: PropTypes.string,
};

LucienModal.defaultProps = {
  title: "Missing title or message",
  message:
    "You see this message due to either title or message props are not given while using LucienModal, please specify it (them) in order to get rid of this defaut mssage. thanks for using.",
};
