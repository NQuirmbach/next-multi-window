export type Popup = {
  popupKey: string;
  componentPath: string;
  props?: any;
};
export type WindowStateContext = {
  popups: Popup[];
  addPopup: (p: Popup) => void;
  removePopup: (key: string) => void;
  isPopedOut: (key: string) => boolean;
};
export type WindowType = "main" | "popup";
