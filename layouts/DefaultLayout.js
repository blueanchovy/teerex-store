// import dynamic from "next/dynamic";
import Header from "components/Header/Header";
import React from "react";

function DefaultLayout({ children }) {
  //   const DynamicHeader = dynamic(() => import("components/Header/Header"));
  return (
    <>
      {/* <DynamicHeader /> */}
      <Header />
      <main>{children}</main>
    </>
  );
}

export default DefaultLayout;
