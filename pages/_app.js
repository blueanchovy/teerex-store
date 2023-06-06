import CardsProvider from "Context/cardsProvider";
import "../styles/globals.css";
import FiltersProvider from "Context/filtersProvider";

function MyApp({ Component, pageProps, cardsData }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <CardsProvider cardsData={cardsData}>
      <FiltersProvider>
        <Component {...pageProps} />
      </FiltersProvider>
    </CardsProvider>
  );
}

export default MyApp;
