import React, { useEffect, useRef } from "react";
import styles from "./irisDriftZoomCircle.module.scss";
import PropTypes from "prop-types";

export default function IrisDriftZoomCircle({
  src,
  className,
  imageStyle,
  ...restProps
}) {
  const lensRef = useRef();
  const imageRef = useRef();
  const zoomDetailsPanel = useRef();

  //   useEffect(() => {
  //     initImageZoom();
  //     return () => {
  //       cancelImageZoom();
  //     };
  //   });

  useEffect(() => {
    magnify(3);
  });

  function magnify(zoom) {
    var img, lens, w, h, bw;
    img = imageRef.current;

    /* Create magnifier glass: */
    lens = lensRef.current;

    /* Insert magnifier glass: */

    /* Set background properties for the magnifier glass: */
    lens.style.backgroundImage = `url(${src})`;
    lens.style.backgroundRepeat = "no-repeat";
    lens.style.backgroundSize =
      img.width * zoom + "px " + img.height * zoom + "px";
    bw = 0;
    w = lens.offsetWidth / 2;
    h = lens.offsetHeight / 2;

    /* Execute a function when someone moves the magnifier glass over the image: */
    lens.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      //   console.log("x", x);
      //   console.log("y", y);
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > img.width - w / zoom) {
        x = img.width - w / zoom;
      }
      if (x < w / zoom) {
        x = w / zoom;
      }
      if (y > img.height - h / zoom) {
        y = img.height - h / zoom;
      }
      if (y < h / zoom) {
        y = h / zoom;
      }
      /* Set the position of the magnifier glass: */
      lens.style.left = x - w + "px";
      lens.style.top = y - h + "px";
      /* Display what the magnifier glass "sees": */
      lens.style.backgroundPosition =
        "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
    }

    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }

  const showZoomDetails = (isShow) => {
    if (lensRef && lensRef.current) {
      lensRef.current.style.display = isShow ? "block" : "none";
      lensRef.current.style.border = isShow ? "1px solid #d4d4d4" : "none";
    }

    if (zoomDetailsPanel && zoomDetailsPanel.current) {
      zoomDetailsPanel.current.style.display = isShow ? "block" : "none";
    }
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

IrisDriftZoomCircle.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  imageStyle: PropTypes.object,
};
