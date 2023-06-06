import { Button, TextField } from "@mui/material";
import React from "react";
import ProductsClasses from "styles/components/Products.module.scss";
import useMobile from "utils/hooks/useMobile";

function SearchBar(props) {
  const {
    handleSearch = () => null,
    handleKeyPress = () => null,
    isOpen = false,
    setIsOpen = () => null,
    setSearchTerm = () => null,
  } = props;
  const { isTabletOrSmaller = false } = useMobile();
  return (
    <div className={ProductsClasses["products__search__bar"]}>
      <input
        id="standard-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className={ProductsClasses["products__search__input"]}
      />
      <div className={ProductsClasses["products__search__searchButton"]}>
        <button
          variant="contained"
          onClick={handleSearch}
          sx={{ height: "100%", width: "max-content" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20px"
            height="20px"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </div>
      {isTabletOrSmaller && (
        <div className={ProductsClasses["products__search__filterButton"]}>
          <button
            variant="contained"
            sx={{ height: "100%", width: "max-content" }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
            >
              <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default React.memo(SearchBar);
