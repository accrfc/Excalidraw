import React from "react";
import { ExcalidrawElement, Versioned, NonDeleted } from "../element/types";
import { AppState } from "../types";

export type ActionResult = {
  elements?: readonly Versioned<ExcalidrawElement>[] | null;
  appState?: AppState | null;
  commitToHistory: boolean;
};

type ActionFn = (
  elements: readonly Versioned<ExcalidrawElement>[],
  appState: AppState,
  formData: any,
) => ActionResult;

export type UpdaterFn = (res: ActionResult, commitToHistory?: boolean) => void;
export type ActionFilterFn = (action: Action) => void;

export interface Action {
  name: string;
  PanelComponent?: React.FC<{
    elements: readonly NonDeleted<ExcalidrawElement>[];
    appState: AppState;
    updateData: (formData?: any) => void;
  }>;
  perform: ActionFn;
  keyPriority?: number;
  keyTest?: (
    event: KeyboardEvent,
    appState: AppState,
    elements: readonly ExcalidrawElement[],
  ) => boolean;
  contextItemLabel?: string;
  contextMenuOrder?: number;
}

export interface ActionsManagerInterface {
  actions: {
    [keyProp: string]: Action;
  };
  registerAction: (action: Action) => void;
  handleKeyDown: (event: KeyboardEvent) => boolean;
  getContextMenuItems: (
    actionFilter: ActionFilterFn,
  ) => { label: string; action: () => void }[];
  renderAction: (name: string) => React.ReactElement | null;
}
