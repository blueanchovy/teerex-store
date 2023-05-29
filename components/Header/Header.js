import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import HeaderClasses from "styles/components/Header.module.scss";

function Header() {
  const router = useRouter();
  return (
    <header className={HeaderClasses["header_main"]}>
      <div className={HeaderClasses["header_left"]}>TeeRex Store</div>
      <div className={HeaderClasses["header_right"]}>
        <div className={HeaderClasses["header_right_products"]}>Products</div>
        <div
          className={HeaderClasses["header_right__cart"]}
          onClick={() => router.push("/Cart")}
        >
          <Image
            src="/cart-shopping-solid.svg"
            width={22}
            height={22}
            alt="cart"
          />
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
