import React, { useEffect, useRef } from "react";
import styles from "./irisImageModal.module.scss";
import image from "./IRIS-demo-image.jpg";
import PropTypes from "prop-types";
export default function IrisImageModal({
  open,
  imageUrl,
  imageAlt,
  caption,
  onClose,
}) {
  const modalRef = useRef();
  const imageRef = useRef();
  useEffect(() => {
    if (open === true) {
      modalRef.current.classList.toggle(styles.open);
      document.body.style.overflow = "hidden";
    }
  }, [open]);

  const handleClose = () => {
    modalRef.current.classList.toggle(styles.open);
    document.body.style.overflow = "";
    onClose();
  };

  const handleFlip = () => {
    imageRef.current.classList.toggle(styles.flip);
  };

  return (
    <div className={styles.modalContainer} ref={modalRef}>
      <div className={styles.contentWrapper} ref={modalRef}>
        <button className={styles.close} onClick={handleClose}></button>

        <div className={styles.modalOverlay}></div>
        <button onClick={handleFlip} className={styles.rotationBtn}></button>
        <img
          ref={imageRef}
          src={imageUrl || image}
          alt={imageAlt || "demo image"}
        />
        <p className={styles.caption}>{caption}</p>
      </div>
    </div>
  );
}

IrisImageModal.propTypes = {
  open: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

IrisImageModal.defaultProps = {
  imageUrl: image,
  imageAlt: "IRIS demo Image",
  caption: "IRIS Demo Image",
};
