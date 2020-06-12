import React, { useEffect } from "react";
import styles from "./lucienModal.module.css";
export default function LucienModal() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={styles.ModalWrapper}>
      <div className={styles.Backdrop}>
        <div className={styles.ModalContent}>content</div>
      </div>
    </div>
  );
}
