import React from "react";

type Props = {
  children: React.ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="bg-rose-400 text-white px-4 py-2 shadow-sm">
        <h1>Multi Window App</h1>
      </header>
      {children}
    </>
  );
};
