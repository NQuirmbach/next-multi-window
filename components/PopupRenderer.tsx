import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

type Query = {
  popup: string[];
  props: string;
};
const PopupRenderer = () => {
  const router = useRouter();

  const { name, props } = useMemo(() => {
    let props = {};

    const query = router.query as Query;
    if (!query.popup || query.popup.length < 2) return { name: "", props };

    console.debug(query.popup);

    const name = query.popup[1];
    if (query.hasOwnProperty("props")) {
      props = JSON.parse(query.props);
    }

    return { name, props };
  }, [router.query]);

  if (!name) return <></>;

  const Component = dynamic(() => import(`../components/${name}`), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      {React.createElement(Component, props)}
    </>
  );
};

export default PopupRenderer;
