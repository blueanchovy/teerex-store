import Filters from "components/Filters/Filters";
import React, { useState } from "react";
import ProductsClasses from "styles/components/Products.module.scss";
import useMobile from "utils/hooks/useMobile";
import ProductsGrid from "./ProductsGrid";
import SearchBar from "components/SearchBar/SearchBar";

function Products(props) {
  const { cardsData } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCards, setVisibleCards] = useState(cardsData);
  const [isOpen, setIsOpen] = useState(false);
  const { isTabletOrSmaller } = useMobile();

  const handleSearch = (e) => {
    console.log("enter");
    e.preventDefault();
    if (!searchTerm) {
      setVisibleCards(cardsData);
    } else {
      console.log("hit");
      const excludedKeys = ["imageURL"];
      const filteredCards = cardsData.filter((item) => {
        const matchingProps = Object.entries(item).reduce(
          (properties, [key, value]) => {
            if (
              !excludedKeys.includes(key) &&
              String(value).toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              properties.push(key);
            }
            return properties;
          },
          []
        );
        if (matchingProps.length > 0) {
          // console.log(
          //   `"${searchTerm}" found in properties: ${matchingProps.join(", ")}`
          // );
          return true;
        }
        return false;
      });
      setVisibleCards(filteredCards);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };
  return (
    <div className={ProductsClasses["products__main"]}>
      <div className={ProductsClasses["products__search"]}>
        <SearchBar
          handleSearch={handleSearch}
          handleKeyPress={handleKeyPress}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setSearchTerm={setSearchTerm}
        />
      </div>
      {isTabletOrSmaller && isOpen && (
        <div id="filters__modal" className={ProductsClasses["filters__modal"]}>
          <div className={ProductsClasses["filters__modal_content"]}>
            <div className={ProductsClasses["filters__modal_close"]}>
              <span onClick={() => setIsOpen(false)}>&times;</span>
            </div>

            <Filters
              cardsData={cardsData}
              hasApplyButton={true}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      )}
      <ProductsGrid cardsDisplayData={visibleCards} />
    </div>
  );
}

export default React.memo(Products);
