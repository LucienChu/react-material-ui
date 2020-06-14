import React, { useEffect, useRef } from "react";
import styles from "./irisModal.module.scss";
import PropTypes from "prop-types";
export default function IrisModal({
  open,
  onClose,
  title,
  message,
  onDismiss,
  onConfirm,
}) {
  const modalRef = useRef();
  useEffect(() => {
    if (open === true) {
      modalRef.current.classList.toggle(styles.open);
      document.body.style.position = "fixed";
    }
  }, [open]);

  const handleClose = () => {
    modalRef.current.classList.toggle(styles.open);
    document.body.style.position = "";
    onClose();
  };

  const handleDismiss = () => {
    handleClose();
    if (onDismiss) {
      onDismiss();
    }
  };

  const handleConfirm = () => {
    handleClose();
    if (onConfirm) {
      onConfirm();
    }
  };

  return (
    <div className={styles.modalContainer} ref={modalRef}>
      <div className={styles.contentWrapper} ref={modalRef}>
        <button className={styles.close} onClick={handleClose}></button>
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
        </div>
        <div className={styles.content}>
          <p>{message}</p>
        </div>

        <div className={styles.actionButtonContainer}>
          <button className={styles.actionButton} onClick={handleDismiss}>
            Dismiss
          </button>
          {onConfirm ? (
            <button className={styles.actionButton} onClick={handleConfirm}>
              Okay
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

IrisModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  onDismiss: PropTypes.func,
  onConfirm: PropTypes.func,
};

IrisModal.defaultProps = {
  open: true,
  title: "Default title for modal",
  message: `Default message. please define properties: open, title and (or) message in order to customize this modal`,
};
