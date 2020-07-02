import React, { useEffect } from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div>
      <div className={styles.Overlay}></div>
      <div className={styles.CenterContainer}>
        <b className={styles.CenterContainer} style={{ color: "#d00205" }}>
          Loading...
        </b>
        <div className={styles.Loader}></div>
      </div>
    </div>
  );
};

export default Spinner;
