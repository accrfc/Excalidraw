import { distanceBetweenPointAndSegment } from "../math";

import { ExcalidrawElement } from "./types";
import {
  getDiamondPoints,
  getElementAbsoluteCoords,
  getLinePoints
} from "./bounds";
import { Point } from "roughjs/bin/geometry";
import { Drawable, OpSet } from "roughjs/bin/core";

function isElementDraggableFromInside(element: ExcalidrawElement): boolean {
  return element.backgroundColor !== "transparent" || element.isSelected;
}

export function hitTest(
  element: ExcalidrawElement,
  x: number,
  y: number
): boolean {
  // For shapes that are composed of lines, we only enable point-selection when the distance
  // of the click is less than x pixels of any of the lines that the shape is composed of
  const lineThreshold = 10;

  if (element.type === "ellipse") {
    // https://stackoverflow.com/a/46007540/232122
    const px = Math.abs(x - element.x - element.width / 2);
    const py = Math.abs(y - element.y - element.height / 2);

    let tx = 0.707;
    let ty = 0.707;

    const a = Math.abs(element.width) / 2;
    const b = Math.abs(element.height) / 2;

    [0, 1, 2, 3].forEach(x => {
      const xx = a * tx;
      const yy = b * ty;

      const ex = ((a * a - b * b) * tx ** 3) / a;
      const ey = ((b * b - a * a) * ty ** 3) / b;

      const rx = xx - ex;
      const ry = yy - ey;

      const qx = px - ex;
      const qy = py - ey;

      const r = Math.hypot(ry, rx);
      const q = Math.hypot(qy, qx);

      tx = Math.min(1, Math.max(0, ((qx * r) / q + ex) / a));
      ty = Math.min(1, Math.max(0, ((qy * r) / q + ey) / b));
      const t = Math.hypot(ty, tx);
      tx /= t;
      ty /= t;
    });

    if (isElementDraggableFromInside(element)) {
      return (
        a * tx - (px - lineThreshold) >= 0 && b * ty - (py - lineThreshold) >= 0
      );
    } else {
      return Math.hypot(a * tx - px, b * ty - py) < lineThreshold;
    }
  } else if (element.type === "rectangle") {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element);

    if (isElementDraggableFromInside(element)) {
      return (
        x > x1 - lineThreshold &&
        x < x2 + lineThreshold &&
        y > y1 - lineThreshold &&
        y < y2 + lineThreshold
      );
    }

    // (x1, y1) --A-- (x2, y1)
    //    |D             |B
    // (x1, y2) --C-- (x2, y2)
    return (
      distanceBetweenPointAndSegment(x, y, x1, y1, x2, y1) < lineThreshold || // A
      distanceBetweenPointAndSegment(x, y, x2, y1, x2, y2) < lineThreshold || // B
      distanceBetweenPointAndSegment(x, y, x2, y2, x1, y2) < lineThreshold || // C
      distanceBetweenPointAndSegment(x, y, x1, y2, x1, y1) < lineThreshold // D
    );
  } else if (element.type === "diamond") {
    x -= element.x;
    y -= element.y;

    let [
      topX,
      topY,
      rightX,
      rightY,
      bottomX,
      bottomY,
      leftX,
      leftY
    ] = getDiamondPoints(element);

    if (isElementDraggableFromInside(element)) {
      // TODO: remove this when we normalize coordinates globally
      if (topY > bottomY) [bottomY, topY] = [topY, bottomY];
      if (rightX < leftX) [leftX, rightX] = [rightX, leftX];

      topY -= lineThreshold;
      bottomY += lineThreshold;
      leftX -= lineThreshold;
      rightX += lineThreshold;

      // all deltas should be < 0. Delta > 0 indicates it's on the outside side
      //  of the line.
      //
      //          (topX, topY)
      //     D  /             \ A
      //      /               \
      //  (leftX, leftY)  (rightX, rightY)
      //    C \               / B
      //      \              /
      //      (bottomX, bottomY)
      //
      // https://stackoverflow.com/a/2752753/927631
      return (
        // delta from line D
        (leftX - topX) * (y - leftY) - (leftX - x) * (topY - leftY) <= 0 &&
        // delta from line A
        (topX - rightX) * (y - rightY) - (x - rightX) * (topY - rightY) <= 0 &&
        // delta from line B
        (rightX - bottomX) * (y - bottomY) -
          (x - bottomX) * (rightY - bottomY) <=
          0 &&
        // delta from line C
        (bottomX - leftX) * (y - leftY) - (x - leftX) * (bottomY - leftY) <= 0
      );
    }

    return (
      distanceBetweenPointAndSegment(x, y, topX, topY, rightX, rightY) <
        lineThreshold ||
      distanceBetweenPointAndSegment(x, y, rightX, rightY, bottomX, bottomY) <
        lineThreshold ||
      distanceBetweenPointAndSegment(x, y, bottomX, bottomY, leftX, leftY) <
        lineThreshold ||
      distanceBetweenPointAndSegment(x, y, leftX, leftY, topX, topY) <
        lineThreshold
    );
  } else if (element.type === "arrow") {
    if (element.shape === null) {
      return false;
    }
    const shape = element.shape as Drawable[];
    // If shape does not consist of curve and two line segments
    // for arrow shape, return false
    if (shape.length < 3) return false;

    const relX = x - element.x;
    const relY = y - element.y;

    // hit test curve and lien segments for arrow
    return (
      hitTestRoughShape(shape[0].sets, relX, relY) ||
      hitTestRoughShape(shape[1].sets, relX, relY) ||
      hitTestRoughShape(shape[2].sets, relX, relY)
    );
  } else if (element.type === "line") {
    const [x1, y1, x2, y2] = getLinePoints(element);
    // The computation is done at the origin, we need to add a translation
    x -= element.x;
    y -= element.y;

    return distanceBetweenPointAndSegment(x, y, x1, y1, x2, y2) < lineThreshold;
  } else if (element.type === "text") {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element);

    return x >= x1 && x <= x2 && y >= y1 && y <= y2;
  } else if (element.type === "selection") {
    console.warn("This should not happen, we need to investigate why it does.");
    return false;
  } else {
    throw new Error("Unimplemented type " + element.type);
  }
}

const pointInBezierEquation = (
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  M: number
) => {
  // B(t) = p0 * (1-t)^3 + 3p1 * t * (1-t)^2 + 3p2 * t^2 * (1-t) + p3 * t^3
  const equation = (t: number) =>
    Math.pow(1 - t, 3) * p3 +
    3 * t * Math.pow(1 - t, 2) * p2 +
    3 * Math.pow(t, 2) * (1 - t) * p1 +
    p0 * Math.pow(t, 3);

  // debug
  // let min = Infinity;
  // let minT = 1.1;

  const epsilon = 3;
  // go through t in increments of 0.01
  let t = 0;
  while (t <= 1.0) {
    const diff = Math.abs(M - equation(t));

    // if (diff < min) {
    //   min = diff;
    //   minT = t;
    // }

    if (diff < epsilon) {
      return true;
    }

    t += 0.01;
  }

  // console.log({ min, minT, eq: equation(minT) });

  return false;
};

const hitTestRoughShape = (opSet: OpSet[], x: number, y: number) => {
  // read operations from first opSet
  const ops = opSet[0].ops;

  // set start position as (0,0) just in case
  // move operation does not exist (unlikely but it is worth safekeeping it)
  let p0: Point = [0, 0];

  return ops.some(({ op, data }) => {
    // There are only four operation types:
    // move, bcurveTo, lineTo, and curveTo
    if (op === "move") {
      // change starting point
      p0 = data as Point;
      // move operation does not draw anything; so, it always
      // returns false
    } else if (op === "bcurveTo") {
      // create points from bezier curve
      // bezier curve stores data as a flattened array of three positions
      // [x1, y1, x2, y2, x3, y3]
      const p1 = [data[0], data[1]] as Point;
      const p2 = [data[2], data[3]] as Point;
      const p3 = [data[4], data[5]] as Point;

      // check if points are on the curve
      // cubic bezier curves require four parameters
      // the first parameter is the last stored position (p0)
      let retVal =
        pointInBezierEquation(p0[0], p1[0], p2[0], p3[0], x) &&
        pointInBezierEquation(p0[1], p1[1], p2[1], p3[1], y);

      // set end point of bezier curve as the new starting point for
      // upcoming operations as each operation is based on the last drawn
      // position of the previous operation
      p0 = p3;
      return retVal;
    } else if (op === "lineTo") {
      // TODO: Implement this
    } else if (op === "qcurveTo") {
      // TODO: Implement this
    }

    return false;
  });
};
