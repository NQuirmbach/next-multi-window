import { useRouter } from "next/router";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";

const Renderer = dynamic(() => import("../components/PopupRenderer"), {
  ssr: false,
});

const PopupPage = () => {
  return <Renderer />;
};

export default PopupPage;
