import React from "react";
import ProductCard from "./ProductCard";
import ProductsGridClasses from "styles/components/ProductsGrid.module.scss";

function ProductsGrid(props) {
  const { cardsDisplayData = {} } = props;
  console.log("cardsDisplaydata", props.cardsDisplayData);
  return (
    <>
      <div className={ProductsGridClasses["productsGrid__main"]}>
        {cardsDisplayData.map((cardData) => (
          <>
            <ProductCard cardData={cardData} />
          </>
        ))}
      </div>
    </>
  );
}

export default React.memo(ProductsGrid);
