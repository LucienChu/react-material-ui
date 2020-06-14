import React, { useState, useEffect, useRef } from "react";
import styles from "./irisImageModal.module.scss";
import image from "./demo.jpg";
export default function IrisImageModal({ open, onClose }) {
  const modalRef = useRef();
  const imageRef = useRef();
  const [isImageRotated, setIsImageRotated] = useState(false);
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

  const handleFlip = () => {
    imageRef.current.classList.toggle(styles.flip);
  };

  return (
    <div className={styles.modalContainer} ref={modalRef}>
      <div className={styles.contentWrapper} ref={modalRef}>
        <button className={styles.close} onClick={handleClose}></button>

        <div className={styles.imageContainer}>
          <div className={styles.modalOverlay}></div>
          <button onClick={handleFlip} className={styles.rotationBtn}></button>
          <img
            ref={imageRef}
            src={image}
            alt="Photo by Bri Schneiter from Pexels"
          />
          <p className={styles.caption}>Caption</p>
        </div>
      </div>
    </div>
  );
}
