export const CORNER_POSITION = {
  UPPER_LEFT: "UPPER LEFT",
  UPPER_RIGHT: "UPPER RIGHT",
  LOWER_LEFT: "LOWER LEFT",
  LOWER_RIGHT: "LOWER RIGHT",
  CENTER: "CENTER",
};

/**
 * @summary convert bounding boxes' coordinates relative to the image ratios
 *
 * @description
 *
 * @param {Array} boundingBoxes array of bounding box objects that coontains (x0, x1, y0, y1)
 * @param {Number} widthRatio ratio between image real width compared to browser's width
 * @param {Number} heightRatio ratio between image real heigh compared to browser's heigh
 */
export const getConvertBoundingBoxes = (
  boundingBoxes,
  widthRatio,
  heightRatio
) => {
  const convertedBoundingBoxes = [];

  for (const box of boundingBoxes) {
    const convertedBox = {
      x0: box.x0 / widthRatio,
      y0: box.y0 / heightRatio,
      x1: box.x1 / widthRatio,
      y1: box.y1 / heightRatio,
    };
    convertedBoundingBoxes.push(convertedBox);
  }

  return convertedBoundingBoxes;
};

export const drawBoundingBoxeCornersAndCenter = (
  ctx,
  x,
  y,
  x0,
  y0,
  boxBorderWidth
) => {
  ctx.fillStyle = "#ff0000";
  const width = x0 - x;
  const heigh = y0 - y;
  ctx.fillRect(
    x - boxBorderWidth / 2,
    y - boxBorderWidth / 2,
    boxBorderWidth,
    boxBorderWidth
  ); // upper left
  ctx.fillRect(
    x - boxBorderWidth / 2,
    y + heigh - boxBorderWidth / 2,
    boxBorderWidth,
    boxBorderWidth
  ); // lower left

  ctx.fillRect(
    x + width - boxBorderWidth / 2,
    y - boxBorderWidth / 2,
    boxBorderWidth,
    boxBorderWidth
  ); // upper right
  ctx.fillRect(
    x + width - boxBorderWidth / 2,
    y + heigh - boxBorderWidth / 2,
    boxBorderWidth,
    boxBorderWidth
  ); // lower right

  // reect center
  ctx.font = "16px Arial";
  ctx.fillStyle = "#ff0000";
  ctx.fillText(
    "X",
    Math.round((2 * x + width) / 2) - boxBorderWidth / 2,
    Math.round((2 * y + heigh) / 2) + boxBorderWidth / 2
  );
};

export const isBetween = (value, value0, value1) => {
  return value >= Math.min(value0, value1) && value <= Math.max(value0, value1);
};

export const isWithinBox = (point, box) => {
  const { x, y } = point;

  const { x0, x1, y0, y1 } = box;

  const isBetweenX = isBetween(x, Math.min(x0, x1), Math.max(x0, x1));
  const isBetweenY = isBetween(y, Math.min(y0, y1), Math.max(y0, y1));
  return isBetweenX && isBetweenY;
};

export const cleanCanvas = (canvasContext, startX, startY, width, heigh) => {
  if (canvasContext && canvasContext.clearRect) {
    canvasContext.clearRect(startX, startY, width, heigh); //clear canvas
  }
  return;
};

export const isBoxTooSmall = (box, widthAndHeighThreshold) => {
  const { x0, y0, x1, y1 } = box;
  return (
    Math.abs(x0 - x1) < widthAndHeighThreshold ||
    Math.abs(y0 - y1) < widthAndHeighThreshold
  );
};

export const foundClickPositionAmongBoundingBoxes = (
  x,
  y,
  boundingBoxes,
  boudingBoxBorderWidth
) => {
  let cornerPosition = null;
  const halfBorderWidth = boudingBoxBorderWidth / 2;
  if (
    isBetween(
      x,
      boundingBoxes.x0 + halfBorderWidth,
      boundingBoxes.x0 - halfBorderWidth
    ) &&
    isBetween(
      y,
      boundingBoxes.y0 + halfBorderWidth,
      boundingBoxes.y0 - halfBorderWidth
    )
  ) {
    cornerPosition = CORNER_POSITION.UPPER_LEFT;
    // alert("upper left");
  } else if (
    isBetween(
      x,
      boundingBoxes.x1 + halfBorderWidth,
      boundingBoxes.x1 - halfBorderWidth
    ) &&
    isBetween(
      y,
      boundingBoxes.y0 + halfBorderWidth,
      boundingBoxes.y0 - halfBorderWidth
    )
  ) {
    // alert("upper right");
    cornerPosition = CORNER_POSITION.UPPER_RIGHT;
  } else if (
    isBetween(
      x,
      boundingBoxes.x1 + halfBorderWidth,
      boundingBoxes.x1 - halfBorderWidth
    ) &&
    isBetween(
      y,
      boundingBoxes.y1 + halfBorderWidth,
      boundingBoxes.y1 - halfBorderWidth
    )
  ) {
    cornerPosition = CORNER_POSITION.LOWER_RIGHT;
    // alert("lower right");
  } else if (
    isBetween(
      x,
      boundingBoxes.x0 + halfBorderWidth,
      boundingBoxes.x0 - halfBorderWidth
    ) &&
    isBetween(
      y,
      boundingBoxes.y1 + halfBorderWidth,
      boundingBoxes.y1 - halfBorderWidth
    )
  ) {
    cornerPosition = CORNER_POSITION.LOWER_LEFT;
    // alert("lower left");
  } else if (
    isBetween(
      x,
      (boundingBoxes.x0 + boundingBoxes.x1 + boudingBoxBorderWidth) / 2,
      (boundingBoxes.x0 + boundingBoxes.x1 - boudingBoxBorderWidth) / 2
    ) &&
    isBetween(
      y,
      (boundingBoxes.y0 + boundingBoxes.y1 + boudingBoxBorderWidth) / 2,
      (boundingBoxes.y0 + boundingBoxes.y1 - boudingBoxBorderWidth) / 2
    )
  ) {
    cornerPosition = CORNER_POSITION.CENTER;
  }
  return cornerPosition;
};

export const isBoxEuql = (box0, box1) => {
  return (
    box0.x0 === box1.x0 &&
    box0.y0 === box1.y0 &&
    box0.x1 === box1.x1 &&
    box0.y1 === box1.y1
  );
};
