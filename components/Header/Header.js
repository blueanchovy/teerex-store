import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import HeaderClasses from "styles/components/Header.module.scss";

function Header() {
  return (
    <div className={HeaderClasses["header_main"]}>
      <div className={HeaderClasses["header_left"]}>TeeRex Store</div>
      <div className={HeaderClasses["header_right"]}>
        <div className={HeaderClasses["header_right_products"]}>
          <Button disableRipple>Products</Button>
        </div>
        <div className={HeaderClasses["header_right__cart"]}>
          <Image
            src="/cart-shopping-solid.svg"
            width={22}
            height={22}
            alt="cart"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
