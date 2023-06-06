import { useCardsContext } from "Context/cardsProvider";
import Filters from "components/Filters/Filters";
import Products from "components/Products/Products";
import React from "react";
import ContentClasses from "styles/components/Content.module.scss";
import useMobile from "utils/hooks/useMobile";

function Content() {
  const { isTabletOrSmaller = false } = useMobile();
  return (
    <div className={ContentClasses["content__main"]}>
      {!isTabletOrSmaller && (
        <div className={ContentClasses["content__left"]}>
          <Filters />
        </div>
      )}
      <div className={ContentClasses["content__right"]}>
        <Products />
      </div>
    </div>
  );
}

export default React.memo(Content);
