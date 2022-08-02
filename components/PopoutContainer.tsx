import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  title: string;
  Component: any;
  props?: any;
};
export const PopoutContainer = ({ Component, title, props }: Props) => {
  const openInWindow = () => {
    if (typeof window === undefined) return;

    console.debug(Component);

    let uri = `/popup/${Component.name}`;
    if (props) {
      uri += `?props=${JSON.stringify(props)}`;
    }

    window.open(uri, "_blank", "toolbar=0,location=0,menubar=0");
  };

  return (
    <div className="flex-1 border border-gray-200 rounded-sm">
      <div className="p-2 border-b border-gray-200 bg-gray-50 flex items-center">
        <span className="flex-1">{title}</span>
        <FontAwesomeIcon
          icon={faWindowRestore}
          onClick={openInWindow}
          className="h-4 cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"
        />
      </div>
      <div className="p-2 h-60">{React.createElement(Component, props)}</div>
    </div>
  );
};
