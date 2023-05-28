import React from "react";
import ProductCard from "./ProductCard";
import ProductsGridClasses from "styles/components/ProductsGrid.module.scss";

function ProductsGrid(props) {
  console.log("cardsDisplaydata", props.cardsDisplayData);
  return (
    <>
      <div className={ProductsGridClasses["productsGrid_main"]}>
        {props.cardsDisplayData.map((cardData) => (
          <>
            <ProductCard cardData={cardData} />
          </>
        ))}
      </div>
    </>
  );
}

export default React.memo(ProductsGrid);
