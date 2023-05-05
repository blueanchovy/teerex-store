import React from "react";

function ProductsGrid(props) {
  console.log(props.cardsDisplayData);
  return (
    <>
      <div>
        {props.cardsDisplayData.map((card) => (
          <>
            <div>{card.color}</div>
          </>
        ))}
      </div>
    </>
  );
}

export default ProductsGrid;
