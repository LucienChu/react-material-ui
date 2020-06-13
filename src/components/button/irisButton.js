import React from "react";
import styles from "./button.module.scss";
export default function IrisButton() {
  // const animateRipple = e => {
  //     let el  = this.$refs.tiBtn;
  //     let pos = el.getBoundingClientRect();

  //     this.ripples.push({
  //         x: e.clientX - pos.left,
  //         y: e.clientY - pos.top
  //     });
  // },

  // const rippleEnd = i => {
  //     ripples.splice(i, 1);
  // }
  return <button className={styles.button}>Iris Button</button>;
}
