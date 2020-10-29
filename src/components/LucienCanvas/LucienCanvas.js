import React, { useRef, useEffect, useState } from "react";
import imageSrc from "./gundum.png";
import {
  getConvertBoundingBoxes,
  drawBoundingBoxeCornersAndCenter,
  isWithinBox,
  cleanCanvas,
  isBoxTooSmall,
  foundClickPositionAmongBoundingBoxes,
  isBoxEuql,
  CORNER_POSITION,
} from "./irisCanvasUtils";

const WIDTH = 1920;
const HEIGHT = 1080;
let isMouseDown = false;

let clickedBox = null;
let clickBorderOrCenterBox = null;
let resizingCorner = null;
let redrawPosition = null;

const BOUNDING_BOX_BORDER_WIDTH = 8;

let pixelWidthRatio = 1;
let pixelHeightRatio = 1;

let imageWidthRatio = 1;
let imageHeighRatio = 1;

const getMouseRelativePosition = (currentX, currentY, component) => {
  if (component && component.getBoundingClientRect) {
    const mouseX = parseInt(currentX - component.getBoundingClientRect().x);
    const mouseY = parseInt(currentY - component.getBoundingClientRect().y);
    return { x: mouseX, y: mouseY };
  }
  return null;
};

const bdBoxes = [
  {
    x0: 1350,
    y0: 810,
    x1: 1870,
    y1: 1010,
  },
  {
    x0: 432,
    y0: 348,
    x1: 609,
    y1: 519,
  },
];

export default function LucienCanvas() {
  //

  // get canvas width relative to window's width
  const windowWidth = window.innerWidth * 0.66;

  // get canvas heigh relaive that match the image ratio (16: 9) and its current width relative to the window
  const newHeight = (windowWidth * HEIGHT) / WIDTH;

  // update image ratios relative to current canvas size
  imageWidthRatio = WIDTH / windowWidth;
  imageHeighRatio = HEIGHT / newHeight;

  // convert bounding boxes' coordinates relative to the image ratios
  const convertedBoundingBoxes = getConvertBoundingBoxes(
    bdBoxes,
    imageWidthRatio,
    imageHeighRatio
  );

  console.log("convertedBoundingBoxes", convertedBoundingBoxes);

  const [boundingBoxes, setBoundingBoxes] = useState(convertedBoundingBoxes);

  const [canvasHeight, setCanvasHeight] = useState(newHeight);
  const [canvasWidth, setCanvasWidth] = useState(windowWidth);

  // update the canva size relative to the updated window port view
  // and also updated the bounding boxes' corrdinates so that the updated
  // bounding boxes would box the same area after thw browser is resized
  const updateViewsAndBoundingBoxes = () => {
    setTimeout(() => {
      // const windowWidth = window.innerWidth;
      const windowWidth = window.innerWidth * 0.66;
      const newHeight = (windowWidth * HEIGHT) / WIDTH;

      pixelWidthRatio = canvasWidth / windowWidth;
      pixelHeightRatio = canvasHeight / newHeight;

      imageWidthRatio = WIDTH / windowWidth;
      imageHeighRatio = HEIGHT / newHeight;

      const updatedBoundingBoxes = getConvertBoundingBoxes(
        boundingBoxes,
        pixelWidthRatio,
        pixelHeightRatio
      );

      setBoundingBoxes(updatedBoundingBoxes);

      setCanvasHeight(newHeight);
      setCanvasWidth(windowWidth);
    }, 500);
  };

  window.onresize = updateViewsAndBoundingBoxes;

  const canvasRef = useRef();

  const mouseDownPosition = useRef();

  // redraw previous bounding boxes
  const drawOrigin = (boundingBoxes) => {
    const ctx = canvasRef.current.getContext("2d");

    cleanCanvas(ctx, 0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.beginPath();
    console.log("cleaned");
    debugger;
    for (const box of boundingBoxes) {
      ctx.rect(box.x0, box.y0, box.x1 - box.x0, box.y1 - box.y0);
      debugger;
      // rect corners
      ctx.fillStyle = "#ffffff";

      drawBoundingBoxeCornersAndCenter(
        ctx,
        box.x0,
        box.y0,
        box.x1,
        box.y1,
        BOUNDING_BOX_BORDER_WIDTH
      );
    }
    debugger;
    ctx.strokeStyle = "#ffffff55";
    ctx.lineWidth = BOUNDING_BOX_BORDER_WIDTH;
    ctx.stroke();
  };

  // redraw bounding boxes after canvas is available, or after screen is resized
  useEffect(() => {
    if (canvasRef) {
      drawOrigin(boundingBoxes);
    }
  }, [canvasRef, canvasHeight, canvasWidth, boundingBoxes, drawOrigin]);

  /*================================================== mouse event ================================================== */

  const handleMouseDown = (event) => {
    // mouse position relatiive to canvas component

    const relativePosition = getMouseRelativePosition(
      event.clientX,
      event.clientY,
      canvasRef.current
    );

    const mouseX = relativePosition.x;
    const mouseY = relativePosition.y;
    mouseDownPosition.current = {
      x: mouseX,
      y: mouseY,
    };
    const point = { x: mouseX, y: mouseY };
    clickedBox = null;

    // check whehter click within an area of a drawn bounding box
    for (const box of boundingBoxes) {
      if (isWithinBox(point, box)) {
        clickedBox = box;
        break;
      }
    }

    resizingCorner = null;
    clickBorderOrCenterBox = null;
    // check whether click on one of the ccorners or center of a drawn bounding box
    for (const box of boundingBoxes) {
      const corner = foundClickPositionAmongBoundingBoxes(
        mouseX,
        mouseY,
        box,
        BOUNDING_BOX_BORDER_WIDTH
      );
      if (corner) {
        // alert(corner);
        resizingCorner = corner;
        clickBorderOrCenterBox = box;
        const { x0, y0, x1, y1 } = box;
        switch (corner) {
          case CORNER_POSITION.LOWER_RIGHT:
            mouseDownPosition.current = {
              // start from upper right corner
              x: x0,
              y: y0,
            };
            redrawPosition = {
              // use to calcualte the realtive width and heigh while redrawing
              x: x0,
              y: y0,
            };
            break;
          case CORNER_POSITION.LOWER_LEFT:
            mouseDownPosition.current = {
              // start from upper right

              x: x1,
              y: y0,
            };
            redrawPosition = {
              x: x1,
              y: y0,
            };
            break;
          case CORNER_POSITION.UPPER_RIGHT:
            mouseDownPosition.current = {
              // start from lower left
              x: x0,
              y: y1,
            };
            redrawPosition = {
              x: x0,
              y: y1,
            };
            break;
          case CORNER_POSITION.UPPER_LEFT:
            mouseDownPosition.current = {
              // start from lower right
              x: x1,
              y: y1,
            };
            redrawPosition = {
              x: x1,
              y: y1,
            };
            break;
        }
        // texting lower right

        // mouseDownPosition.current = {
        //   x: clickBorderOrCenterBox.x1,
        //   y: clickBorderOrCenterBox.y0,
        // };
        break;
      }
    }

    if (resizingCorner && clickBorderOrCenterBox) {
      if (resizingCorner === CORNER_POSITION.CENTER) {
        const result = window.confirm(
          "Do you want to remove this bounding box?"
        );
        if (result) {
          const cutBoundingBoxex = boundingBoxes.filter(
            (box) => !isBoxEuql(box, clickBorderOrCenterBox)
          );

          const ctx = canvasRef.current.getContext("2d");

          cleanCanvas(
            ctx,
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );

          setBoundingBoxes(cutBoundingBoxex);
        }
      }
    }
    // user did not clicked inside the area of a bounding box, nor
    // click on either corner of a bouding box
    if (clickedBox === null && resizingCorner === null) {
      isMouseDown = true;
      // mouseDownPosition.current = {
      //   x: mouseX,
      //   y: mouseY,
      // };
    }
  };

  const handleMouseMove = (event) => {
    const relativePosition = getMouseRelativePosition(
      event.clientX,
      event.clientY,
      canvasRef.current
    );
    const mouseX = relativePosition.x || 0;
    const mouseY = relativePosition.y || 0;

    if (isMouseDown) {
      drawOrigin(boundingBoxes);
      const { x, y } = mouseDownPosition.current;
      const width = mouseX - x;
      const height = mouseY - y;
      const ctx = canvasRef.current.getContext("2d");

      // cleanCanvas(ctx, 0, 0, canvasRef.current.width, canvasRef.current.height);

      ctx.beginPath();
      ctx.rect(x, y, width, height);

      drawBoundingBoxeCornersAndCenter(
        ctx,
        x,
        y,
        mouseX,
        mouseY,
        BOUNDING_BOX_BORDER_WIDTH
      );
      ctx.strokeStyle = "#ffffff55";

      ctx.lineWidth = BOUNDING_BOX_BORDER_WIDTH;

      ctx.stroke();
    } else if (clickBorderOrCenterBox && resizingCorner && redrawPosition) {
      drawOrigin(boundingBoxes);

      const width = mouseX - redrawPosition.x;
      const height = mouseY - redrawPosition.y;

      const ctx = canvasRef.current.getContext("2d");

      // cleanCanvas(ctx, 0, 0, canvasRef.current.width, canvasRef.current.height);

      ctx.beginPath();
      ctx.strokeStyle = "red";
      ctx.rect(redrawPosition.x, redrawPosition.y, width, height);

      drawBoundingBoxeCornersAndCenter(
        ctx,
        redrawPosition.x,
        redrawPosition.y,
        mouseX,
        mouseY,
        BOUNDING_BOX_BORDER_WIDTH
      );
      ctx.strokeStyle = "#ffffff55";

      ctx.lineWidth = BOUNDING_BOX_BORDER_WIDTH;

      ctx.stroke();
    }
  };

  const handleMouseUp = (event) => {
    const { x, y } = mouseDownPosition.current;

    const relativeEndPosition = getMouseRelativePosition(
      event.clientX,
      event.clientY,
      canvasRef.current
    );
    const mouseX = relativeEndPosition.x;
    const mouseY = relativeEndPosition.y;

    // genearte the drawn bounding

    const drawnBoundingBox = {
      x0: Math.min(x, mouseX), // upper left corner x, min value,
      y0: Math.max(y, mouseY), // upper left corner y, max value,
      x1: Math.max(x, mouseX), // lower right corner x, max value,
      y1: Math.min(y, mouseY), // lower right corner y, min value,
    };

    let copiedBoundingBoxes = [...boundingBoxes];

    // omit the drawn bounding box if it is too small
    if (isBoxTooSmall(drawnBoundingBox, 20)) {
      const canvas = canvasRef.current;
      const context = canvasRef.current.getContext("2d");
      cleanCanvas(context, 0, 0, canvas.width, canvas.height);
      drawOrigin(boundingBoxes);
    } else {
      if (resizingCorner && clickBorderOrCenterBox) {
        // if the drawn bounding box is a result of resizing an existed bounding box
        // remove the old bounding box
        copiedBoundingBoxes = copiedBoundingBoxes.filter(
          (box) => !isBoxEuql(box, clickBorderOrCenterBox)
        );
      }
      // save the dran bounding box
      copiedBoundingBoxes.push(drawnBoundingBox);
      setBoundingBoxes(copiedBoundingBoxes);
    }

    // reset flags
    isMouseDown = false;
    clickedBox = null;
    clickBorderOrCenterBox = null;
    resizingCorner = null;
    redrawPosition = null;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        left
        <button
          onClick={() => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            cleanCanvas(ctx, 0, 0, canvas.width, canvas.height);
            // ctx.clear();
          }}
        >
          remove
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: `100% 100%`,
        }}
      />
      <div>
        right
        <button onClick={() => setBoundingBoxes([boundingBoxes[1]])}>
          remove
        </button>
      </div>
    </div>
  );
}
