import {
  ExcalidrawElement,
  NonDeletedExcalidrawElement,
} from "../element/types";
import { getElementAbsoluteCoords, getElementBounds } from "../element";
import { AppState } from "../types";
import { isBoundToContainer } from "../element/typeChecks";
import { isVisibleElement } from "../renderer/renderScene";

export const getElementsWithinSelection = (
  elements: readonly NonDeletedExcalidrawElement[],
  selection: NonDeletedExcalidrawElement,
) => {
  const [selectionX1, selectionY1, selectionX2, selectionY2] =
    getElementAbsoluteCoords(selection);
  return elements.filter((element) => {
    const [elementX1, elementY1, elementX2, elementY2] =
      getElementBounds(element);

    return (
      element.locked === false &&
      element.type !== "selection" &&
      !isBoundToContainer(element) &&
      selectionX1 <= elementX1 &&
      selectionY1 <= elementY1 &&
      selectionX2 >= elementX2 &&
      selectionY2 >= elementY2
    );
  });
};

export const isSomeElementSelected = (
  elements: readonly NonDeletedExcalidrawElement[],
  appState: Pick<AppState, "selectedElementIds">,
): boolean =>
  elements.some((element) => appState.selectedElementIds[element.id]);

/**
 * Returns common attribute (picked by `getAttribute` callback) of selected
 *  elements. If elements don't share the same value, returns `null`.
 */
export const getCommonAttributeOfSelectedElements = <T>(
  elements: readonly NonDeletedExcalidrawElement[],
  appState: Pick<AppState, "selectedElementIds">,
  getAttribute: (element: ExcalidrawElement) => T,
): T | null => {
  const attributes = Array.from(
    new Set(
      getSelectedElements(elements, appState).map((element) =>
        getAttribute(element),
      ),
    ),
  );
  return attributes.length === 1 ? attributes[0] : null;
};

export const getSelectedElements = (
  elements: readonly NonDeletedExcalidrawElement[],
  appState: Pick<AppState, "selectedElementIds">,
  includeBoundTextElement: boolean = false,
) =>
  elements.filter((element) => {
    if (appState.selectedElementIds[element.id]) {
      return element;
    }
    if (
      includeBoundTextElement &&
      isBoundToContainer(element) &&
      appState.selectedElementIds[element?.containerId]
    ) {
      return element;
    }
    return null;
  });

export const getVisibleAndNonSelectedElements = (
  elements: readonly NonDeletedExcalidrawElement[],
  selectedElements: readonly NonDeletedExcalidrawElement[],
  appState: AppState,
) => {
  const selectedElementsSet = new Set(selectedElements);
  return elements.filter(
    (element) =>
      !selectedElementsSet.has(element) &&
      isVisibleElement(element, appState.width, appState.height, {
        zoom: appState.zoom,
        offsetLeft: appState.offsetLeft,
        offsetTop: appState.offsetTop,
        scrollX: appState.scrollX,
        scrollY: appState.scrollY,
      }),
  );
};

export const getTargetElements = (
  elements: readonly NonDeletedExcalidrawElement[],
  appState: Pick<AppState, "selectedElementIds" | "editingElement">,
) =>
  appState.editingElement
    ? [appState.editingElement]
    : getSelectedElements(elements, appState, true);
