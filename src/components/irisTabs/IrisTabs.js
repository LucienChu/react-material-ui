import React, { useState, useEffect } from "react";
import styles from "./IrisTabs.module.scss";

export default function IrisTabs({ width }) {
  useEffect(() => {
    document.getElementById("tab-container").style.width = width + "px";
  }, []);
  const [index, setIndex] = useState(0);
  return (
    <div id="tab-container" style={{ height: "100vh", width: "500px" }}>
      <div className={styles.tab}>
        <button
          id="btn"
          className={`${styles.tabButton} ${index === 0 ? styles.active : ""}`}
          onClick={() => setIndex(0)}
        >
          London
        </button>
        <button
          className={`${styles.tabButton} ${index === 1 ? styles.active : ""}`}
          onClick={() => setIndex(1)}
        >
          Paris
        </button>
        <button
          className={`${styles.tabButton} ${index === 2 ? styles.active : ""}`}
          onClick={() => setIndex(2)}
        >
          Tokyo
        </button>
      </div>
      <div style={{ height: "95vh" }}>
        {index === 0 && (
          <div id="London" className={styles.tabContent}>
            <h3>London</h3>
            <p>London is the capital city of England.</p>
          </div>
        )}
        {index === 1 && (
          <div id="Paris" className={styles.tabContent}>
            <h3>Paris</h3>
            <p>Paris is the capital of France.</p>
          </div>
        )}

        {index === 2 && (
          <div id="Tokyo" className={styles.tabContent}>
            <h3>Tokyo</h3>
            <p>Tokyo is the capital of Japan.</p>
          </div>
        )}
      </div>
    </div>
  );
}
