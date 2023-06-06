import { useCardsContext } from "Context/cardsProvider";
import { useFiltersContext } from "Context/filtersProvider";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FiltersClasses from "styles/components/Filters.module.scss";

function Filters(props) {
  const { hasApplyButton = false, setIsOpen = () => null } = props;
  const { cardsData = [] } = useCardsContext();
  const {
    searchedGenders = [],
    searchedColors = [],
    searchedTypes = [],
  } = useFiltersContext();
  const colors = [...new Set(cardsData?.map((card) => card?.color))];
  const genders = [...new Set(cardsData?.map((card) => card?.gender))];
  const types = [...new Set(cardsData?.map((card) => card?.type))];
  const prices = ["0-250", "250-450", "450"];
  const [checkedColors, setCheckedColors] = useState(colors);
  const [checkedGenders, setCheckedGenders] = useState(genders);
  const [checkedTypes, setCheckedTypes] = useState(types);
  const [checkedRanges, setCheckedRanges] = useState(prices);
  const { router } = useRouter();

  useEffect(() => {
    setCheckedColors(searchedColors);
    setCheckedTypes(searchedTypes);
    setCheckedGenders(searchedGenders);
  }, [searchedGenders, searchedColors, searchedTypes]);

  const handleCheckboxChange = (event, value) => {
    const isChecked = event.target.checked;

    const handleCase = (setState, value, isChecked) => {
      setState((prevState) => {
        if (isChecked) {
          return [...prevState, value];
        } else {
          return prevState.filter((item) => item !== value);
        }
      });
    };

    switch (true) {
      case colors.includes(value):
        handleCase(setCheckedColors, value, isChecked);
        break;

      case genders.includes(value):
        handleCase(setCheckedGenders, value, isChecked);
        break;

      case types.includes(value):
        handleCase(setCheckedTypes, value, isChecked);
        break;

      case prices.includes(value):
        handleCase(setCheckedRanges, value, isChecked);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <div className={FiltersClasses["filters__main"]}>
        {/* <div className={FiltersClasses["filters__title"]}></div> */}
        <div className={FiltersClasses["filters__sections"]}>
          <div className={FiltersClasses["filters__sections__colour"]}>
            <div className={FiltersClasses["filters__sections__colourTitle"]}>
              Colour
            </div>
            <div className={FiltersClasses["filters__sections__colourBody"]}>
              {colors.map((color) => {
                return (
                  <div key={color}>
                    <input
                      type="checkbox"
                      id={color}
                      name={color}
                      checked={checkedColors?.includes(color)}
                      onChange={(event) => handleCheckboxChange(event, color)}
                    />
                    <label htmlFor={color}>{color}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={FiltersClasses["filters__sections__gender"]}>
            <div className={FiltersClasses["filters__sections__genderTitle"]}>
              Gender
            </div>
            {genders.map((gender) => (
              <div key={gender}>
                <input
                  type="checkbox"
                  id={gender}
                  name={gender}
                  checked={checkedGenders?.includes(gender)}
                  onChange={(event) => handleCheckboxChange(event, gender)}
                />
                <label htmlFor={gender}>{gender}</label>
              </div>
            ))}
          </div>
          <div className={FiltersClasses["filters__sections__price"]}>
            <div className={FiltersClasses["filters__sections__priceTitle"]}>
              Price
            </div>
            <div className={FiltersClasses["filters__sections__priceBody"]}>
              {/* <input type="checkbox" id="price1" name="price1" />
              <label htmlFor="price1">0 - 250</label>
              <input type="checkbox" id="price2" name="price2" />
              <label htmlFor="price2">251 - 450</label>
              <input type="checkbox" id="price3" name="price3" />
              <label htmlFor="price3">450</label> */}
              {prices.map((priceRange) => (
                <div key={priceRange}>
                  <input
                    type="checkbox"
                    id={priceRange}
                    name={priceRange}
                    checked={checkedRanges?.includes(priceRange)}
                    onChange={(event) =>
                      handleCheckboxChange(event, priceRange)
                    }
                  />
                  <label htmlFor={priceRange}>{priceRange}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={FiltersClasses["filters__sections__type"]}>
            <div className={FiltersClasses["filters__sections__typeTitle"]}>
              Type
            </div>
            {types.map((type) => (
              <div key={type}>
                <input
                  type="checkbox"
                  id={type}
                  name={type}
                  checked={checkedTypes?.includes(type)}
                  onChange={(event) => handleCheckboxChange(event, type)}
                />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>
        </div>
        {hasApplyButton && (
          <div className={FiltersClasses["filters__apply"]}>
            <button onClick={() => setIsOpen(false)}>Apply</button>
          </div>
        )}
      </div>
    </>
  );
}

export default React.memo(Filters);
