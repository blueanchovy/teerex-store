import { createContext, useContext, useState } from "react";
import { useCardsContext } from "./cardsProvider";

const FiltersContext = createContext();

export const useFiltersContext = () => useContext(FiltersContext);

export default function FiltersProvider({ children }) {
  const { cardsData: initialCardsData } = useCardsContext();
  console.log(initialCardsData);
  const [searchedColors, setSearchedColors] = useState([
    ...new Set(initialCardsData?.map((card) => card?.color)),
  ]);
  const [searchedGenders, setSearchedGenders] = useState([
    ...new Set(initialCardsData?.map((card) => card?.gender)),
  ]);
  const [searchedTypes, setSearchedTypes] = useState([
    ...new Set(initialCardsData?.map((card) => card?.type)),
  ]);

  const updateFilters = (filteredCardsData) => {
    console.log("hit");
    setSearchedColors([
      ...new Set(filteredCardsData?.map((card) => card?.color)),
    ]);

    setSearchedGenders([
      ...new Set(filteredCardsData?.map((card) => card?.gender)),
    ]);
    setSearchedTypes([
      ...new Set(filteredCardsData?.map((card) => card?.type)),
    ]);
  };

  return (
    <FiltersContext.Provider
      value={{
        searchedGenders,
        searchedColors,
        searchedTypes,
        updateFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
