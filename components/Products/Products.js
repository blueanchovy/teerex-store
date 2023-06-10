import Filters from "components/Filters/Filters";
import React, { useEffect, useState } from "react";
import ProductsClasses from "styles/components/Products.module.scss";
import useMobile from "utils/hooks/useMobile";
import ProductsGrid from "./ProductsGrid";
import SearchBar from "components/SearchBar/SearchBar";
import { useCardsContext } from "Context/cardsProvider";
import { useFiltersContext } from "Context/filtersProvider";

function Products() {
  const { cardsData = [] } = useCardsContext();
  const { updateFilters = () => null } = useFiltersContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCards, setVisibleCards] = useState(cardsData);
  const [isOpen, setIsOpen] = useState(false);
  const { isTabletOrSmaller = false } = useMobile();

  useEffect(() => {
    updateFilters(cardsData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateMatchingProps = (item, searchWords, excludedKeys) => {
    return Object.entries(item).reduce((properties, [key, value]) => {
      if (
        !excludedKeys.includes(key) &&
        searchWords.some((word) => {
          return String(value).toLowerCase().includes(word);
        })
      ) {
        const words = String(value).toLowerCase().split(" ");
        const matchingWords = words.filter((word) =>
          searchWords.includes(word)
        );
        properties.push(...matchingWords);
      }
      return properties;
    }, []);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      setVisibleCards(cardsData);
      updateFilters(cardsData);
    } else {
      const searchWords = searchTerm.toLowerCase().split(" ");
      const excludedKeys = ["imageURL", "quantity", "price", "currency", "id"];

      const filteredCards = cardsData.filter((item) => {
        const matchingProps = calculateMatchingProps(
          item,
          searchWords,
          excludedKeys
        );
        const hasAllSearchedWords = searchWords.every((word) =>
          matchingProps.includes(word)
        );
        return hasAllSearchedWords;
      });

      const sortedCards = filteredCards.sort((a, b) => {
        const matchingPropsA = calculateMatchingProps(
          a,
          searchWords,
          excludedKeys
        );
        const matchingPropsB = calculateMatchingProps(
          b,
          searchWords,
          excludedKeys
        );

        if (matchingPropsA.length === matchingPropsB.length) {
          const aWordIndex = searchWords.findIndex((word) =>
            String(a).toLowerCase().includes(word)
          );
          const bWordIndex = searchWords.findIndex((word) =>
            String(b).toLowerCase().includes(word)
          );

          return aWordIndex - bWordIndex;
        }

        return matchingPropsB.length - matchingPropsA.length;
      });

      setVisibleCards(sortedCards);
      updateFilters(sortedCards);
      console.log("sorted", sortedCards);
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

            <Filters hasApplyButton={true} setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
      <ProductsGrid cardsDisplayData={visibleCards} />
    </div>
  );
}

export default React.memo(Products);
