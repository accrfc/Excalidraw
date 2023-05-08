import {
  ExcalidrawElement,
  NonDeletedExcalidrawElement,
  PointerType,
} from "./types";

import { getElementAbsoluteCoords } from "./bounds";
import { rotate } from "../math";
import { AppState, Zoom } from "../types";
import { isTextElement } from ".";
import { isLinearElement } from "./typeChecks";
import { DEFAULT_SPACING } from "../renderer/renderScene";
import { isPointSnapped, Snaps } from "../snapping";

export type TransformHandleDirection =
  | "n"
  | "s"
  | "w"
  | "e"
  | "nw"
  | "ne"
  | "sw"
  | "se";

export type TransformHandleType = TransformHandleDirection | "rotation";

export type TransformHandle = [
  x: number,
  y: number,
  width: number,
  height: number,
  isHighlighted?: boolean,
];
export type TransformHandles = Partial<{
  [T in TransformHandleType]: TransformHandle;
}>;
export type MaybeTransformHandleType = TransformHandleType | false;

const transformHandleSizes: { [k in PointerType]: number } = {
  mouse: 8,
  pen: 16,
  touch: 28,
};

const ROTATION_RESIZE_HANDLE_GAP = 16;

export const OMIT_SIDES_FOR_MULTIPLE_ELEMENTS = {
  e: true,
  s: true,
  n: true,
  w: true,
};

const OMIT_SIDES_FOR_TEXT_ELEMENT = {
  e: true,
  s: true,
  n: true,
  w: true,
};

const OMIT_SIDES_FOR_LINE_SLASH = {
  e: true,
  s: true,
  n: true,
  w: true,
  nw: true,
  se: true,
};

const OMIT_SIDES_FOR_LINE_BACKSLASH = {
  e: true,
  s: true,
  n: true,
  w: true,
};

export const getTransformHandlesFromCoords = (
  [x1, y1, x2, y2, cx, cy]: [number, number, number, number, number, number],
  angle: number,
  zoom: Zoom,
  pointerType: PointerType,
  omitSides: { [T in TransformHandleType]?: boolean } = {},
  margin = 0,
  snaps: Snaps | null = null,
): TransformHandles => {
  const size = transformHandleSizes[pointerType];
  const handleWidth = size / zoom.value;
  const handleHeight = size / zoom.value;

  const handleMarginX = size / zoom.value;
  const handleMarginY = size / zoom.value;

  const width = x2 - x1;
  const height = y2 - y1;
  const dashedLineMargin = margin / zoom.value;
  const centeringOffset = (size - DEFAULT_SPACING * 2) / (2 * zoom.value);

  const applyAngle = (x: number, y: number) => rotate(x, y, cx, cy, angle);

  const generateTransformHandle = (
    [x, y]: [x: number, y: number],
    [dx, dy]: [x: number, y: number],
    isHighlighted = isPointSnapped(applyAngle(x, y), snaps ?? []),
  ): TransformHandle => {
    const [xx, yy] = applyAngle(
      x + dx + handleWidth / 2,
      y + dy + handleHeight / 2,
    );

    return [
      xx - handleWidth / 2,
      yy - handleHeight / 2,
      handleWidth,
      handleHeight,
      isHighlighted,
    ];
  };

  const transformHandles: TransformHandles = {
    nw: omitSides.nw
      ? undefined
      : generateTransformHandle(
          [x1, y1],
          [
            centeringOffset - dashedLineMargin - handleMarginX,
            centeringOffset - dashedLineMargin - handleMarginY,
          ],
        ),
    ne: omitSides.ne
      ? undefined
      : generateTransformHandle(
          [x2, y1],
          [
            dashedLineMargin - centeringOffset,
            centeringOffset - dashedLineMargin - handleMarginY,
          ],
        ),
    sw: omitSides.sw
      ? undefined
      : generateTransformHandle(
          [x1, y2],
          [
            centeringOffset - dashedLineMargin - handleMarginX,
            dashedLineMargin - centeringOffset,
          ],
        ),
    se: omitSides.se
      ? undefined
      : generateTransformHandle(
          [x2, y2],
          [
            dashedLineMargin - centeringOffset,
            dashedLineMargin - centeringOffset,
          ],
        ),
    rotation: omitSides.rotation
      ? undefined
      : generateTransformHandle(
          [x1 + width / 2, y1],
          [
            -handleWidth / 2,
            centeringOffset -
              dashedLineMargin -
              handleMarginY -
              ROTATION_RESIZE_HANDLE_GAP / zoom.value,
          ],
          false,
        ),
  };

  // We only want to show height handles (all cardinal directions)  above a certain size
  // Note: we render using "mouse" size so we should also use "mouse" size for this check
  const minimumSizeForEightHandles =
    (5 * transformHandleSizes.mouse) / zoom.value;
  if (Math.abs(width) > minimumSizeForEightHandles) {
    if (!omitSides.n) {
      transformHandles.n = generateTransformHandle(
        [x1 + width / 2, y1],
        [-handleWidth / 2, centeringOffset - dashedLineMargin - handleMarginY],
      );
    }
    if (!omitSides.s) {
      transformHandles.s = generateTransformHandle(
        [x1 + width / 2, y2],
        [-handleWidth / 2, -centeringOffset + dashedLineMargin],
      );
    }
  }
  if (Math.abs(height) > minimumSizeForEightHandles) {
    if (!omitSides.w) {
      transformHandles.w = generateTransformHandle(
        [x1, y1 + height / 2],
        [
          -dashedLineMargin - handleMarginX + centeringOffset,
          -handleHeight / 2,
        ],
      );
    }
    if (!omitSides.e) {
      transformHandles.e = generateTransformHandle(
        [x2, y1 + height / 2],
        [+dashedLineMargin - centeringOffset, -handleHeight / 2],
      );
    }
  }

  return transformHandles;
};

export const getTransformHandles = (
  element: ExcalidrawElement,
  zoom: Zoom,
  pointerType: PointerType = "mouse",
  snaps: Snaps | null = null,
): TransformHandles => {
  // so that when locked element is selected (especially when you toggle lock
  // via keyboard) the locked element is visually distinct, indicating
  // you can't move/resize
  if (element.locked) {
    return {};
  }

  let omitSides: { [T in TransformHandleType]?: boolean } = {};
  if (element.type === "freedraw" || isLinearElement(element)) {
    if (element.points.length === 2) {
      // only check the last point because starting point is always (0,0)
      const [, p1] = element.points;
      if (p1[0] === 0 || p1[1] === 0) {
        omitSides = OMIT_SIDES_FOR_LINE_BACKSLASH;
      } else if (p1[0] > 0 && p1[1] < 0) {
        omitSides = OMIT_SIDES_FOR_LINE_SLASH;
      } else if (p1[0] > 0 && p1[1] > 0) {
        omitSides = OMIT_SIDES_FOR_LINE_BACKSLASH;
      } else if (p1[0] < 0 && p1[1] > 0) {
        omitSides = OMIT_SIDES_FOR_LINE_SLASH;
      } else if (p1[0] < 0 && p1[1] < 0) {
        omitSides = OMIT_SIDES_FOR_LINE_BACKSLASH;
      }
    }
  } else if (isTextElement(element)) {
    omitSides = OMIT_SIDES_FOR_TEXT_ELEMENT;
  }
  const dashedLineMargin = isLinearElement(element)
    ? DEFAULT_SPACING + 8
    : DEFAULT_SPACING;
  return getTransformHandlesFromCoords(
    getElementAbsoluteCoords(element, true),
    element.angle,
    zoom,
    pointerType,
    omitSides,
    dashedLineMargin,
    snaps,
  );
};

export const shouldShowBoundingBox = (
  elements: NonDeletedExcalidrawElement[],
  appState: AppState,
) => {
  if (appState.editingLinearElement) {
    return false;
  }
  if (elements.length > 1) {
    return true;
  }
  const element = elements[0];
  if (!isLinearElement(element)) {
    return true;
  }

  return element.points.length > 2;
};
