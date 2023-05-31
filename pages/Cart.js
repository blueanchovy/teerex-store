import DefaultLayout from "layouts/DefaultLayout";
import React from "react";

export default function Cart() {
  return <div>Cart</div>;
}

Cart.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
