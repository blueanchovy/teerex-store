import { createContext, useContext, useEffect, useState } from "react";

const CardsContext = createContext();

export default function CardsProvider({ children }) {
  const [cardsData, setCardsData] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCardsData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setCardsData([]);
      }
    }
    fetchData();
  }, []);
  return (
    <CardsContext.Provider value={{ cardsData }}>
      {children}
    </CardsContext.Provider>
  );
}

export function useCardsContext() {
  return useContext(CardsContext);
}
