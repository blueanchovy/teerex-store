import Image from "next/image";
import React, { useState } from "react";
import ProductCardClasses from "styles/components/ProductCard.module.scss";

function ProductCard(props) {
  const { cardData } = props;
  const [itemCountInCart, setItemCountInCart] = useState(0);

  const handleAddToCart = () => {
    if (itemCountInCart < cardData.quantity) {
      setItemCountInCart(itemCountInCart + 1);
    }
  };
  return (
    <>
      <div className={ProductCardClasses["productCard__main"]}>
        <Image
          src={cardData.imageURL}
          alt={cardData.name}
          width={180}
          height={80}
          style={{
            objectFit: "contain",
            width: "auto",
            height: "auto",
            margin: "0 auto",
          }}
          className={ProductCardClasses["productCard__img"]}
        />
        <div className={ProductCardClasses["productCard__details"]}>
          <div className={ProductCardClasses["productCard__name"]}>
            {cardData.name}
          </div>
          <div className={ProductCardClasses["productCard__summary"]}>
            <div className={ProductCardClasses["productCard__price"]}>
              {cardData.currency + " " + cardData.price}
            </div>
            {!itemCountInCart ? (
              <div
                className={ProductCardClasses["productCard__addToCartButton"]}
                onClick={handleAddToCart}
              >
                <div
                  className={ProductCardClasses["productCard__addToCartText"]}
                >
                  Add to Cart
                </div>

                <Image
                  src="/cart-shopping-solid.svg"
                  width={22}
                  height={22}
                  alt="cart"
                />
              </div>
            ) : (
              <div className={ProductCardClasses["productCard__itemStepper"]}>
                <div
                  className={ProductCardClasses["productCard__itemStepperLess"]}
                  onClick={() => {
                    if (itemCountInCart > 0) {
                      setItemCountInCart(itemCountInCart - 1);
                    }
                  }}
                >
                  &minus;
                </div>
                <div
                  className={
                    ProductCardClasses["productCard__itemStepperCount"]
                  }
                >
                  {itemCountInCart}
                </div>
                <div
                  className={ProductCardClasses["productCard__itemStepperMore"]}
                  onClick={() => {
                    if (itemCountInCart < cardData.quantity) {
                      setItemCountInCart(itemCountInCart + 1);
                    }
                  }}
                >
                  &#43;
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(ProductCard);
