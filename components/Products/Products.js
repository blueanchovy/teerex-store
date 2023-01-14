import { InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import ProductsClasses from "styles/components/Products.module.scss";

function Products() {
  return (
    <div className={ProductsClasses["products__main"]}>
      <div className={ProductsClasses["products__searchbar"]}>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Image
                  src="/magnifying-glass-solid.svg"
                  alt="search"
                  width={18}
                  height={18}
                />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={ProductsClasses["products__grid"]}></div>
    </div>
  );
}

export default Products;
