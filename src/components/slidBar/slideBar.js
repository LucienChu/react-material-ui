import React, { useRef } from "react";
import styles from "./slideBar.module.scss";
export default function SlideBar() {
  const drawerRef = useRef();

  const toggleDrawer = (event) => {
    drawerRef.current.classList.toggle(styles.hide);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <div ref={drawerRef} className={styles.drawer} onClick={toggleDrawer}>
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
          &times;
        </a>
        <a href="#">Services</a>
      </div>
    </div>
  );
}
