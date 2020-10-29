import React from "react";
// 48 49 49 51 52 53 54 55 56 57    18   16
// 1  2   3  4  5  6  7  8  9  10   alt  shift
const SHORT_CUT_KEYS = [48, 49, 49, 51, 52, 53, 54, 55, 56, 57];
const keyPressed = (event) => {
  // only when number key is press
  if (SHORT_CUT_KEYS.indexOf(event.keyCode) > -1) {
    // shift key is pressed along with the number key
    if (event.shiftKey) {
      console.log("shift nice:: " + event.keyCode);
      // alt key is pressed along with the number key
    } else if (event.altKey) {
      console.log("alt nice:: " + event.keyCode);
      // only the number key is pressed
    } else if (SHORT_CUT_KEYS.indexOf(event.keyCode) > -1) {
      console.log("only number pad ", event.keyCode);
    } else {
      // other keys, igore this event
    }
  }
};

export default function LucienKeyEvent() {
  return (
    <div
      tabIndex={1}
      onKeyUp={keyPressed}
      style={{ width: "100%", height: "100vh", background: "pink" }}
    >
      key event
    </div>
  );
}
