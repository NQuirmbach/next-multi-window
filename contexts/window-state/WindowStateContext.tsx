import React, { useState } from "react";
import { Popup, WindowStateContext } from "./types";

const defaultValue: WindowStateContext = {
  popups: [],
  addPopup: () => {},
  removePopup: () => {},
  isPopedOut: () => false,
};

export const Context = React.createContext(defaultValue);

export function useWindowState() {
  return React.useContext(Context);
}
