import { useEffect, useState } from "react";
import { Popup, WindowStateContext, WindowType } from "./types";
import { Context } from "./WindowStateContext";

const STORAGE_KEY = "window-state";

type ProviderProps = {
  children: React.ReactNode;
  windowType: WindowType;
};
export function WindowStateProvider({ children, windowType }: ProviderProps) {
  const [popups, setPopups] = useState<Popup[]>([]);

  const addPopup = (p: Popup) => {
    const arr = [...popups, p];
    const index = arr.findIndex((m) => m.popupKey === p.popupKey);
    if (index >= 0) {
      arr[index] = p;
    } else {
      arr.push(p);
    }

    setPopups(arr);

    console.count("add");

    updateStorage(arr);
  };
  const removePopup = (key: string) => {
    const index = popups.findIndex((m) => m.popupKey === key);
    if (index < 0) return;

    const tmp = [...popups];
    tmp.splice(index, 1);

    setPopups(tmp);
    updateStorage(tmp);
  };
  const updateStorage = (state: any) => {
    const json = JSON.stringify(state);

    localStorage.setItem(STORAGE_KEY, json);
  };
  const storageChange = (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY) return;

    const state = e.newValue ? JSON.parse(e.newValue) : [];
    setPopups(state);
  };
  const isPopedOut = (key: string) =>
    popups.findIndex((m) => m.popupKey === key) >= 0;

  useEffect(() => {
    if (typeof window === undefined || windowType === "main") return;

    console.log("Loading state");

    const json = localStorage.getItem(STORAGE_KEY);
    if (json) {
      const arr = JSON.parse(json);
      setPopups(arr);
    }
  }, [windowType]);

  useEffect(() => {
    if (typeof window === undefined) return;

    const state = localStorage.getItem(STORAGE_KEY);
    if (state) {
    }

    window.addEventListener("storage", storageChange);
    return () => window.removeEventListener("storage", storageChange);
  }, []);

  const value: WindowStateContext = {
    popups,
    addPopup,
    removePopup,
    isPopedOut,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
