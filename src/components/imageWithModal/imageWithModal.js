import React, { useState } from "react";
import IrisImageModal from "../../cssComponent/panel/IrisImageModal/irisImageModal";
import PropTypes from "prop-types";
import styles from "./imageWithModal.module.scss";

export default function ImageWithModal({
  src,
  alt,
  modalCaption,
  ...restProps
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.imageContainer} {...restProps}>
      <div className={styles.overlay} onClick={() => setOpen(true)}></div>
      <img className={styles.image} src={src} />
      <IrisImageModal
        open={open}
        imageUrl={src}
        imageAlt={alt}
        caption={modalCaption || ""}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

ImageWithModal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  modalCaption: PropTypes.string,
};
