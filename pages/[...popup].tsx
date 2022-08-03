import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Popup, useWindowState } from "../contexts/window-state";

type Query = {
  popup: string[];
};
const PopupPage = () => {
  const router = useRouter();
  const [popup, setPopup] = useState<Popup>();
  const { popups, removePopup } = useWindowState();

  useEffect(() => {
    if (!router.isReady) return;

    const query = router.query as Query;
    const popupKey = query.popup[1];

    const popup = popups.find((m) => m.popupKey === popupKey);
    if (!popup) {
      console.error(`Cannot find popup with key ${popupKey}`);
    }
    setPopup(popup);
  }, [popups, router]);

  const unloadHandler = () => {
    if (popup) removePopup(popup.popupKey);
  };

  useEffect(
    () => {
      if (typeof window === undefined || !popup) return;

      window.addEventListener("beforeunload", unloadHandler);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [popup]
  );

  if (!popup) return <></>;

  const Component = dynamic(
    () => import(`../components/${popup.componentPath}`)
  );

  return (
    <>
      <Head>
        <title>{popup.popupKey}</title>
      </Head>
      {React.createElement(Component, popup.props)}
    </>
  );
};

export default PopupPage;
