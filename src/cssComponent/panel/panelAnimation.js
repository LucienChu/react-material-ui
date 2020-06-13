import React, { useState, useEffect, createRef } from "react";
import styles from "./panel.module.css";
export default function PanelAnimation() {
  const panelRef = createRef();
  const [isPanelClosed, setIsPanelClosed] = useState(true);

  const handleOpenPanel = () => {
    if (isPanelClosed) {
      panelRef.current.classList.toggle(styles.takePlace);
      setTimeout(() => {
        panelRef.current.classList.toggle(styles.show);
        setIsPanelClosed(false);
      }, 100);
    }
  };

  const handleClosePanel = () => {
    if (!isPanelClosed) {
      panelRef.current.classList.toggle(styles.show);
      setTimeout(() => {
        panelRef.current.classList.toggle(styles.takePlace);
        setIsPanelClosed(true);
      }, 1000);
    }
  };

  return (
    <div>
      <div>
        {/* <button onClick={() => setPanelIsOpened(!panelIsOpened)}>click</button> */}
        <button onClick={handleOpenPanel}>open</button>
      </div>
      <div
        ref={panelRef}
        className={styles.panel}
        onClick={() => console.log("clicked")}
      >
        <button onClick={handleClosePanel}>close</button>
        Panel
      </div>
    </div>
  );
}
