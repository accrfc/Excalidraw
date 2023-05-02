import {
  useDevice,
  useExcalidrawSetAppState,
  useExcalidrawAppState,
} from "../App";
import { SidebarTriggerProps } from "./common";

import "./SidebarTrigger.scss";
import clsx from "clsx";

export const SidebarTrigger = ({
  name,
  tab,
  icon,
  title,
  children,
  onToggle,
  className,
}: SidebarTriggerProps) => {
  const device = useDevice();
  const setAppState = useExcalidrawSetAppState();
  // TODO replace with sidebar context
  const appState = useExcalidrawAppState();

  return (
    <label title={title}>
      <input
        className="ToolIcon_type_checkbox"
        type="checkbox"
        onChange={(event) => {
          document
            .querySelector(".layer-ui__wrapper")
            ?.classList.remove("animate");
          const isOpen = event.target.checked;
          setAppState({ openSidebar: isOpen ? { name, tab } : null });
          onToggle?.(isOpen);
        }}
        checked={appState.openSidebar?.name === name}
        aria-label={title}
        aria-keyshortcuts="0"
      />
      <div className={clsx("sidebar-trigger", className)}>
        {icon && <div>{icon}</div>}
        {!device.isMobile && children && (
          <div className="sidebar-trigger__label">{children}</div>
        )}
      </div>
    </label>
  );
};
