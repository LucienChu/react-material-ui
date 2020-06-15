import React, { useState } from "react";
import styles from "./button.module.scss";
import PropTypes from "prop-types";
export default function IrisRippleButton({
  rippleColor,
  rippleDuration,
  style,
  children,
  ...rest
}) {
  const [rippleArray, setRippleArray] = useState([]);

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;

    const x = event.pageX - rippleContainer.x - rippleContainer.width / 2;
    const y = event.pageY - rippleContainer.y - rippleContainer.width / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray((prevState) => [...prevState, newRipple]);
  };
  return (
    <button
      className={styles.parent}
      style={style}
      onClick={addRipple}
      {...rest}
    >
      {children || "Iris Button"}
      <div className={styles.container}>
        {rippleArray.length > 0 &&
          rippleArray.map((ripple, index) => {
            return (
              <span
                key={"ripple_" + index}
                style={{
                  background: "blue",
                  top: ripple.y,
                  left: ripple.x,
                  width: ripple.size,
                  height: ripple.size,
                  animationDuration: rippleDuration + "ms",
                  backgroundColor: rippleColor,
                }}
              />
            );
          })}
      </div>
    </button>
  );
}

IrisRippleButton.defaultProps = {
  rippleColor: "#ffffff",
  style: { backgroundColor: "#d00205b3", color: "white", fontSize: "1rem" },
  rippleDuration: 1000,
};

IrisRippleButton.propTypes = {
  rippleColor: PropTypes.string,
  rippleDuration: PropTypes.string,
  style: PropTypes.string,
};
