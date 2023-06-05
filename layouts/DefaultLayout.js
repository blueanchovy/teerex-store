import dynamic from "next/dynamic";
import React from "react";

function DefaultLayout({ children }) {
  const DynamicHeader = dynamic(() => import("components/Header/Header"));
  return (
    <>
      <DynamicHeader />
      <main>{children}</main>
    </>
  );
}

export default DefaultLayout;
