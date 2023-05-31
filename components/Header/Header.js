import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import HeaderClasses from "styles/components/Header.module.scss";
import useMobile from "utils/hooks/useMobile";

function Header() {
  const router = useRouter();
  const { isMobileOrSmaller } = useMobile();
  return (
    <header className={HeaderClasses["header_main"]}>
      <div
        className={HeaderClasses["header_left"]}
        onClick={() => router.push("/")}
      >
        TeeRex Store
      </div>
      <div className={HeaderClasses["header_right"]}>
        {!isMobileOrSmaller && (
          <div
            className={HeaderClasses["header_right_products"]}
            onClick={() => router.push("/")}
          >
            Products
          </div>
        )}
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
