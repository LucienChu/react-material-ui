import React, { useEffect, useRef } from "react";
import styles from "./irisDriftZoomCircle.module.scss";
import PropTypes from "prop-types";

export default function IrisDriftZoom({
  src,
  className,
  imageStyle,
  zoomLevel,
  breakPoint,
  ...restProps
}) {
  const lensRef = useRef();
  const imageRef = useRef();
  const zoomDetailsPanel = useRef();

  useEffect(() => {
    initMagnifier();
    // initImageZoom();
    return () => {
      cancelMagnifier();
      // cancelImageZoom();
    };
  });

  useEffect(() => {
    var mql = window.matchMedia(`(max-width: ${breakPoint}px)`);
    console.log("wi", window.innerWidth);
    document.body.style.backgroundColor =
      window.innerWidth > breakPoint ? "blue" : "width";
    function screenTest(e) {
      if (e.matches) {
        /* the viewport is 600 pixels wide or less */
        document.body.style.backgroundColor = "red";
      } else {
        /* the viewport is more than than 600 pixels wide */
        document.body.style.backgroundColor = "blue";
      }
    }

    mql.addListener(screenTest);
  }, [breakPoint]);

  /*================================================== methos for magnifier ================================================== */
  const initMagnifier = () => {
    lensRef.current.style.backgroundImage = `url(${src})`;
    lensRef.current.style.display = "none";
    lensRef.current.style.borderRadius = "50%";
    lensRef.current.addEventListener("mousemove", moveMagnifier);
    imageRef.current.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    lensRef.current.addEventListener("touchmove", moveMagnifier);
    imageRef.current.addEventListener("touchmove", moveMagnifier);
  };

  const cancelMagnifier = () => {
    lensRef.current.removeEventListener("mousemove", moveMagnifier);
    imageRef.current.removeEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    lensRef.current.removeEventListener("touchmove", moveMagnifier);
    imageRef.current.removeEventListener("touchmove", moveMagnifier);
  };

  const moveMagnifier = (event) => {
    event.preventDefault();
    const image = imageRef.current;
    const lens = lensRef.current;

    lens.style.backgroundImage = `url(${src})`;
    lens.style.backgroundRepeat = "no-repeat";
    lens.style.backgroundSize = `${image.offsetWidth * zoomLevel}px ${
      image.offsetHeight * zoomLevel
    }px`;
    const pos = getCursorPos(event, image);
    /*calculate the position of the lens:*/

    let lensHalfWidth = lens.offsetWidth / 2;
    let lensHalfHeigh = lens.offsetHeight / 2;
    let cursorX = pos.x;
    let cursorY = pos.y;
    /*prevent the lens from being positioned outside the image:*/
    // cursor leaving frame on right
    if (cursorX > image.width - lensHalfWidth / zoomLevel) {
      cursorX = image.width - lensHalfWidth / zoomLevel;
    }
    // cursor leaving frame on left
    if (cursorX < lensHalfWidth / zoomLevel) {
      cursorX = lensHalfWidth / zoomLevel;
    }
    console.log("cursorX", cursorX);
    console.log(
      "image.width - lensHalfWidth / 3",
      image.width - lensHalfWidth / 3
    );
    if (cursorY > image.height - lensHalfHeigh / zoomLevel) {
      cursorY = image.height - lensHalfHeigh / zoomLevel;
    }
    if (cursorY < lensHalfHeigh / zoomLevel) {
      cursorY = lensHalfHeigh / zoomLevel;
    }
    // if (lensY < 0) {
    //   lensY = 0;
    // }
    /*set the position of the lens:*/
    lens.style.left = cursorX - lensHalfWidth + "px";
    lens.style.top = cursorY - lensHalfHeigh + "px";
    /*display what the lens "sees":*/
    lens.style.backgroundPosition =
      "-" +
      (cursorX * zoomLevel - lensHalfWidth) +
      "px -" +
      (cursorY * zoomLevel - lensHalfHeigh) +
      "px";
  };

  /*================================================== methos for hover zoom ================================================== */
  const initImageZoom = () => {
    zoomDetailsPanel.current.style.backgroundImage = `url(${src})`;
    zoomDetailsPanel.current.style.display = "none";
    lensRef.current.addEventListener("mousemove", moveLens);
    imageRef.current.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lensRef.current.addEventListener("touchmove", moveLens);
    imageRef.current.addEventListener("touchmove", moveLens);
  };

  const cancelImageZoom = () => {
    lensRef.current.removeEventListener("mousemove", moveLens);
    imageRef.current.removeEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lensRef.current.removeEventListener("touchmove", moveLens);
    imageRef.current.removeEventListener("touchmove", moveLens);
  };

  const moveLens = (event) => {
    event.preventDefault();
    const image = imageRef.current;
    const lens = lensRef.current;
    const result = zoomDetailsPanel.current;
    const cx = result.offsetWidth / lens.offsetWidth;
    const cy = result.offsetHeight / lens.offsetHeight;
    // result.style.backgroundImage = `url(${src})`;

    result.style.backgroundSize = `${image.offsetWidth * cx}px ${
      image.offsetHeight * cy
    }px`;
    const pos = getCursorPos(event, image);
    /*calculate the position of the lens:*/

    let lensX = pos.x - lens.offsetWidth / 2;
    let lensY = pos.y - lens.offsetHeight / 2;
    /*prevent the lens from being positioned outside the image:*/
    if (lensX > image.width - lens.offsetWidth) {
      lensX = image.width - lens.offsetWidth;
    }
    if (lensX < 0) {
      lensX = 0;
    }
    if (lensY > image.height - lens.offsetHeight) {
      lensY = image.height - lens.offsetHeight;
    }
    if (lensY < 0) {
      lensY = 0;
    }
    /*set the position of the lens:*/
    lens.style.left = lensX + "px";
    lens.style.top = lensY + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition =
      "-" + lensX * cx + "px -" + lensY * cy + "px";
  };

  const showZoomDetails = (isShow) => {
    if (lensRef && lensRef.current) {
      lensRef.current.style.display = isShow ? "block" : "none";
      lensRef.current.style.border = isShow ? "1px solid #d4d4d4" : "none";
    }

    if (zoomDetailsPanel && zoomDetailsPanel.current) {
      zoomDetailsPanel.current.style.display = isShow ? "block" : "none";
    }
  };

  /*================================================== shared methods ================================================== */
  const getCursorPos = (e, image) => {
    let imageBound,
      x = 0,
      y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    imageBound = image.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - imageBound.left;
    y = e.pageY - imageBound.top;

    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  };

  return (
    <div className={styles.imgZoomContainer}>
      <div
        className={className ? className : styles.imageContainer}
        onMouseEnter={() => showZoomDetails(true)}
        onMouseLeave={() => showZoomDetails(false)}
      >
        <div ref={lensRef} id="lens" className={styles.imgZoomLen}></div>
        <img
          className={imageStyle ? imageStyle : ""}
          id="myimage"
          ref={imageRef}
          src={src}
          style={{
            width: "100%",
          }}
          alt="iris drift zoom"
        />
      </div>
      <div ref={zoomDetailsPanel} className={styles.zoomDetailsPanel}></div>
    </div>
  );
}

IrisDriftZoom.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  imageStyle: PropTypes.object,
  zoomLevel: PropTypes.number,
};

IrisDriftZoom.defaultProps = {
  zoomLevel: 3,
};
