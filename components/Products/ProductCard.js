import Image from "next/image";
import React from "react";
import ProductCardClasses from "styles/components/ProductCard.module.scss";

function ProductCard(props) {
  const { cardData } = props;
  return (
    <>
      <div className={ProductCardClasses["productCard__main"]}>
        <Image
          src={cardData.imageURL}
          alt={cardData.type + cardData.name}
          width={90}
          height={45}
          style={{
            objectFit: "contain",
            width: "auto",
            height: "auto",
            margin: "0 auto",
          }}
          className={ProductCardClasses["productCard__img"]}
        />
      </div>
    </>
  );
}

export default React.memo(ProductCard);
