import React from "react";
import FiltersClasses from "styles/components/Filters.module.scss";

function Filters(props) {
  const {
    cardsData = {},
    hasApplyButton = false,
    setIsOpen = () => null,
  } = props;
  const colors = [...new Set(cardsData?.map((card) => card?.color))];
  const genders = [...new Set(cardsData?.map((card) => card?.gender))];
  const types = [...new Set(cardsData?.map((card) => card?.type))];
  const prices = ["0-250", "250-450", "450"];
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
              {colors.map((color) => (
                <div key={color}>
                  <input type="checkbox" id={color} name={color} />
                  <label htmlFor={color}>{color}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={FiltersClasses["filters__sections__gender"]}>
            <div className={FiltersClasses["filters__sections__genderTitle"]}>
              Gender
            </div>
            {genders.map((gender) => (
              <div key={gender}>
                <input type="checkbox" id={gender} name={gender} />
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
                  <input type="checkbox" id={priceRange} name={priceRange} />
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
                <input type="checkbox" id={type} name={type} />
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
