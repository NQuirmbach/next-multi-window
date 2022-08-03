import React, { useState } from "react";
import { Popup, WindowStateContext } from "./types";

const defaultValue: WindowStateContext = {
  popups: [],
  addPopup: () => {},
  removePopup: () => {},
};

export const Context = React.createContext(defaultValue);

export function useWindowState() {
  return React.useContext(Context);
}
