import React from "react";
import styles from "./irisSubmenu.module.scss";
export default function IrisSubmenu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
          <ul>
            <li>
              <a href="#">item</a>
            </li>
            <li>
              <a href="#">item</a>
            </li>
            <li>
              <a href="#">item</a>
            </li>
            <li>
              <a href="#">item</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Resume</a>
          <ul>
            <li>
              <a href="#">item a lonng submenu</a>
            </li>
            <li>
              <a href="#">item</a>
              <ul>
                <li>
                  <a href="#">Ray</a>
                </li>
                <li>
                  <a href="#">Veronica</a>
                </li>
                <li>
                  <a href="#">Bushy</a>
                </li>
                <li>
                  <a href="#">Havoc</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">item</a>
            </li>
            <li>
              <a href="#">item</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Download</a>
        </li>
        <li>
          <a href="#">Rants</a>
          <ul>
            <li>
              <a href="#">item</a>
            </li>
            <li>
              <a href="#">item</a>
            </li>
            <li>
              <a href="#">item</a>
            </li>
            <li>
              <a href="#">item</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
