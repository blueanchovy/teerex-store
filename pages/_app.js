import CardsProvider from "Context/cardsProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps, cardsData }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <CardsProvider cardsData={cardsData}>
      <Component {...pageProps} />
    </CardsProvider>
  );
}

export default MyApp;
