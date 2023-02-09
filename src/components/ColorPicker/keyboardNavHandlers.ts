import { activeColorPickerSectionAtomType } from "./Picker";
import {
  COLOR_PER_ROW,
  DEFAULT_SHADE_INDEX,
  Palette,
  colorPickerHotkeyBindings,
  getColorNameAndShadeFromHex,
} from "./colorPickerUtils";

const arrowHandler = (
  eventKey: string,
  currentIndex: number,
  length: number,
) => {
  const rows = Math.ceil(length / COLOR_PER_ROW);

  switch (eventKey) {
    case "ArrowLeft": {
      const prevIndex = currentIndex - 1;
      return prevIndex < 0 ? length - 1 : prevIndex;
    }
    case "ArrowRight": {
      return (currentIndex + 1) % length;
    }
    case "ArrowDown": {
      const nextIndex = currentIndex + COLOR_PER_ROW;
      return nextIndex >= length ? currentIndex % COLOR_PER_ROW : nextIndex;
    }
    case "ArrowUp": {
      const prevIndex = currentIndex - COLOR_PER_ROW;
      const newIndex =
        prevIndex < 0 ? COLOR_PER_ROW * rows + prevIndex : prevIndex;
      return newIndex >= length ? undefined : newIndex;
    }
  }
};

const hotkeyHandler = (
  e: React.KeyboardEvent,
  colorObj: {
    colorName: string;
    shade: number;
  } | null,
  onChange: (color: string) => void,
  palette: Palette,
  customColors: string[],
  setActiveColorPickerSection: (
    update: React.SetStateAction<activeColorPickerSectionAtomType>,
  ) => void,
) => {
  if (colorObj && colorObj.shade >= 0) {
    // shift + numpad is extremely messed up on windows apparently
    if (
      ["Digit1", "Digit2", "Digit3", "Digit4", "Digit5"].includes(e.code) &&
      e.shiftKey
    ) {
      const newShade = Number(e.code.slice(-1)) - 1;
      onChange(palette[colorObj.colorName][newShade]);
      setActiveColorPickerSection("shades");
    }
  }

  if (["1", "2", "3", "4", "5"].includes(e.key)) {
    const c = customColors[Number(e.key) - 1];
    if (c) {
      onChange(customColors[Number(e.key) - 1]);
      setActiveColorPickerSection("custom");
    }
  }

  if (colorPickerHotkeyBindings.includes(e.key)) {
    const index = colorPickerHotkeyBindings.indexOf(e.key);
    const paletteKey = Object.keys(palette)[index];
    const paletteValue = palette[paletteKey];
    const r = Array.isArray(paletteValue)
      ? paletteValue[DEFAULT_SHADE_INDEX]
      : paletteValue;
    onChange(r);
    setActiveColorPickerSection("default");
  }
};

export const colorPickerKeyNavHandler = (
  e: React.KeyboardEvent,
  activeSection: activeColorPickerSectionAtomType,
  palette: Palette,
  hex: string | null,
  onChange: (color: string) => void,
  customColors: string[],
  setActiveColorPickerSection: (
    update: React.SetStateAction<activeColorPickerSectionAtomType>,
  ) => void,
) => {
  if (e.key === "Escape" || !hex) {
    return;
  }

  e.preventDefault();
  e.nativeEvent.stopImmediatePropagation();
  e.stopPropagation();

  const colorObj = getColorNameAndShadeFromHex({ hex, palette });

  hotkeyHandler(
    e,
    colorObj,
    onChange,
    palette,
    customColors,
    setActiveColorPickerSection,
  );

  if (activeSection === "shades") {
    if (colorObj) {
      const { shade } = colorObj;
      const newShade = arrowHandler(e.key, shade, COLOR_PER_ROW);

      if (newShade !== undefined) {
        onChange(palette[colorObj.colorName][newShade]);
      }
    }
  }

  if (activeSection === "default") {
    if (colorObj) {
      const { colorName } = colorObj;
      const colorNames = Object.keys(palette);
      const indexOfColorName = colorNames.indexOf(colorName);

      const newColorIndex = arrowHandler(
        e.key,
        indexOfColorName,
        colorNames.length,
      );

      if (newColorIndex !== undefined) {
        const newColorName = colorNames[newColorIndex];
        const newColorNameValue = palette[newColorName];

        onChange(
          Array.isArray(newColorNameValue)
            ? newColorNameValue[DEFAULT_SHADE_INDEX]
            : newColorNameValue,
        );
      }
    }
  }

  if (activeSection === "custom") {
    const indexOfColor = customColors.indexOf(hex);

    const newColorIndex = arrowHandler(
      e.key,
      indexOfColor,
      customColors.length,
    );

    if (newColorIndex !== undefined) {
      const newColor = customColors[newColorIndex];
      onChange(newColor);
    }
  }
};
